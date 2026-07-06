import Auth from '../models/auth.model.js'
import Doctor from '../models/doctor.model.js'
import Appointment from '../models/appointment.model.js'

// 1. Sab patients dekho
export const getAllUsers = async (req, res) => {
    try {
        const users = await Auth.find({ role: 'patient' }).select('-password')
        res.status(200).json({ users })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// 2. Sab doctors dekho
export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({}).select('-password')
        res.status(200).json({ doctors })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// 3. Doctor approve karo
export const approveDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            { isApproved: true },
            { new: true }
        )

        if (!doctor) {
            return res.status(404).json({
                message: "Doctor not found!"
            })
        }

        res.status(200).json({
            message: "Doctor approved successfully!",
            doctor
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// 4. Sab appointments dekho
export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({})
        res.status(200).json({ appointments })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}