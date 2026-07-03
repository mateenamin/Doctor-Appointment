import User from '../models/user.model.js'


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
            password: hashedPassword
        })

        await newUser.save()


        res.status(201).json({
            message: "User registered successfully!"
        })


    } catch (err) {
        res.status(500).json({ message: err.message })
    }




}