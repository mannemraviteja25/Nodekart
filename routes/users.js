const router = require('express').Router();
const { User, Course } = require('../models/model');
const {JWT_password} = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const z = require('zod');
const { verifyUser } = require('../middleware/users');


const userSchema = {
    email: z.string().email(),
    username: z.string().max(20),
    password: z.string().min(8)
}



router.post('/signup', async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const parsedEmail = userSchema.email.parse(email);
        const parsedUsername = userSchema.username.parse(username);
        const parsedPassword = userSchema.password.parse(password);

        if (!email || !username || !password) {
            return res.status(400).json({ error: 'Please provide all required fields (email, username, password).' });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'User with this email already exists.' });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this username already exists.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ email, username, password: hashedPassword });
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ userId: newUser._id, username: newUser.username }, JWT_password, { expiresIn: '1h' });

        // localStorage.setItem('token', token);
        console.log('User created successfully');
        res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: error.message });
    }
});



router.post('/signin' ,async (req, res, next) => {
    // sign in logic and add the jwt token in the local storage
    const {email , username , password} = req.body;

    const parsedEmail = userSchema.email.parse(email)
    const parsedUsername = userSchema.username.parse(username)
    const parsedPassword = userSchema.password.parse(password)

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(parsedPassword, salt);

    const existingEmail = User.findOne(email);
    const existingUser = User.findOne(username);

    if (existingEmail || existingUser){
        const token = jwt.sign({ userId: email, username: username }, JWT_password, { expiresIn: '1h' });
        // localStorage.setItem('token', token);
        res.json({token : token});
    }
})


router.get('/products',verifyUser , (req, res, next) => {
    // add products logic
    
})

router.get('/products/:pid', (req, res, next) => {
    // edit product logic
})

router.post('/add-cart', (req, res, next) => {
    // add logic for 
})

router.post('/purchase-course', (req, res, next) => {
    // add purchase course logic for cart
})

router.get('/cart', (req, res, next) => {
    // add get cart logic
})

router.get('/purchased-products', (req, res, next) => {
    // add view purchased products in admin side logic
})

router.get('/view-profile', (req, res, next) => {
    // add view profile data in admin side logic
})

module.exports = router;