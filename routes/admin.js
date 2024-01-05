const router = require('express').Router();
const { Admin, Course } = require('../models/model');
const { JWT_password } = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const z = require('zod');
const { verifyAdmin } = require('../middleware/admin');
const idGenerator = require('../idGenerator');

const adminSchema = {
  email: z.string().email(),
  username: z.string().max(20),
  password: z.string().min(8)
}

router.post('/signup', async (req, res, next) => {
  const { email, username, password } = req.body;

  try {
    const parsedEmail = adminSchema.email.parse(email);
    const parsedAdminname = adminSchema.username.parse(username);
    const parsedPassword = adminSchema.password.parse(password);

    if (!email || !username || !password) {
      return res.status(400).json({ error: 'Please provide all required fields (email, username, password).' });
    }

    const existingEmail = await Admin.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: 'Admin with this email already exists.' });
    }

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin with this username already exists.' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({ email, username, password: hashedPassword });
    await newAdmin.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newAdmin._id, username: newAdmin.username }, JWT_password, { expiresIn: '1h' });

    // localStorage.setItem('token', token);
    console.log('Admin created successfully');
    res.status(201).json({ message: 'Admin created successfully', token });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: error.message });
  }
})
router.post('/signin', async (req, res, next) => {
  // sign in logic and add the jwt token in the local storage
  const { email, username, password } = req.body;

  const parsedEmail = adminSchema.email.parse(email)
  const parsedAdminname = adminSchema.username.parse(username)
  const parsedPassword = adminSchema.password.parse(password)

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(parsedPassword, salt);

  const existingEmail = Admin.findOne(email);
  const existingAdmin = Admin.findOne(username);

  if (existingEmail || existingAdmin) {
    const token = jwt.sign({ userId: email, username: username }, JWT_password, { expiresIn: '1h' });
    // localStorage.setItem('token', token);
    res.json({ token: token });
  }
})


router.post('/add-products', verifyAdmin, async (req, res, next) => {
  // add products logic
  const { title, description, price, img } = req.body;
  try {
    console.log(title, description, price, img)
    const courseId = idGenerator();
    const token = req.headers.token;
    console.log(token)
    const adminUsername = jwt.decode(token)
    console.log(adminUsername);
    const admin = await Admin.findOneAndUpdate(
      { username: adminUsername },
      { $push: { courseId: courseId } },
      { new: true }
    )
    console.log(admin);
    const course = await Course.create({ title, description, price, img, courseId });
    console.log(course)
    res.send(admin);
  }
  catch (error) {
    console.log(error);
  }

})

router.post('/edit-products/:courseId', verifyAdmin, async (req, res, next) => {
  try {
    const courseId = req.params.courseId;

    console.log(courseId);

    // Assuming you have the necessary fields to update in the request body
    const { title, description, price, img } = req.body;

    // Using findOneAndUpdate to find the course by courseId and update its fields
    const updatedCourse = await Course.findOneAndUpdate(
      { courseId: courseId },
      { title, description, price, img },
      { new: true } // This option returns the updated document
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Send the updated course as a response
    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/edit-profile', (req, res, next) => {
  // add edit admin profile logic
})

router.post('/delete', (req, res, next) => {
  // add delete product logic
})

router.get('/products', (req, res, next) => {
  // add view products in admin side logic
})

router.get('/view-profile', (req, res, next) => {
  // add view profile data in admin side logic
})

module.exports = router;
