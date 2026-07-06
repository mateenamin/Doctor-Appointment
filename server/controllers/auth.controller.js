import User from '../models/auth.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({
                message: "Your email is already registered!"
            });
        }


        const hashedPassword = await bcrypt.hash(password, 10)


        const newUser = new User({
            name,
            email,
            password: hashedPassword,

        })

        await newUser.save()


        res.status(201).json({
            message: "User registered successfully!",
            user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
    }
        })


    } catch (err) {
        res.status(500).json({ message: err.message })
    }




}


export const loginUser = async (req, res) => {

    try{
        const { email, password } = req.body


    const user = await User.findOne({ email })

    if (!user) {
        return res.status(404).json({
            message: "User not found!"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(401).json({
            message: "Incorrect password!"
        })
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )

    res.status(200).json({
            message: "Login successful!",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    }catch (err) {
        res.status(500).json({ 
            message: err.message 
        })
    }
}


export const logoutUser = (req, res) => {
    res.status(200).json({
        message: "Logged out successfully!"
    })
}













// Token kya hai — samjho:
// User login kiya → Server ne verify kiya → 
// Server ne ek "pass" diya → yeh pass = TOKEN
// Token ek proof hai ke tum logged in ho.

// Token mein kya save hota hai:
// javascriptjwt.sign({ id: user._id }, secret, { expiresIn: '7d' })
// user._id → MongoDB ne jo ID assign ki thi 
//            jab signup kiya tha
//            Example: "64abc123..."

// Yeh ID token ke andar chhupi hoti hai
// Server baad mein token se ID nikal ke 
// pehchanta hai — "yeh Ali hai"