import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import Auth from '../models/auth.model.js'
import dotenv from 'dotenv'

import dns from 'dns'
// DNS fix
dns.setServers(['8.8.8.8', '1.1.1.1'])

dotenv.config()

const seedAdmin = async () => {
    try {
        // Step 1 — Database connect karo
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB Connected')

        // Step 2 — Admin pehle se hai check karo
        const existingAdmin = await Auth.findOne({ role: 'admin' })
        if (existingAdmin) {
            console.log('Admin already exists!')
            process.exit()
        }

        // Step 3 — Password hash karo
        const hashedPassword = await bcrypt.hash('admin123', 10)

        // Step 4 — Admin banao
        const admin = new Auth({
            name: 'Admin',
            email: 'admin@gmail.com',
            password: hashedPassword,
            role: 'admin'
        })

        // Step 5 — Save karo
        await admin.save()
        console.log('Admin created successfully!')
        process.exit()

    } catch (err) {
        console.log('Error:', err.message)
        process.exit()
    }
}

seedAdmin()




// Line by line


// dotenv.config()     → .env file load karo (MONGO_URI ke liye)

// mongoose.connect()  → database se connect karo

// findOne({role:'admin'}) → pehle check karo admin hai ya nahi
//                           agar hai → dobara mat banao

// bcrypt.hash()       → password secure karo

// new User({...})     → admin object banao
// role: 'admin'       → yeh normal user nahi hai

// admin.save()        → database mein save karo

// process.exit()      → script band karo