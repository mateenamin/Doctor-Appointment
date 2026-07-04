import Doctor from '../models/doctor.model.js'

export const getAllDoctors = async (req, res) => {
    try {

        const doctors = await Doctor.find({})

        res.status(200).json({

            doctors
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message

        })
    }

}


export const getDoctorById = async (req, res) => {
    try {

        const doctor = await Doctor.findById(req.params.id)

        if (!doctor) {
            return res.status(404).json({
                message: "Doctor not found!"
            })
        }

        res.status(200).json({ doctor })


    } catch (err) {
        return res.status(500).json({
            message: err.message

        })
    }

}

export const updateDoctorProfile = async (req, res) => {

    try {
        const doctor = await Doctor.findByIdAndUpdate(
            req.params.id,    // kaun sa doctor update karna hai
            req.body,         // kya update karna hai
            { new: true }     // updated data return karo
        )

        if (!doctor) {
            return res.status(404).json({
                message: "Doctor not found!"
            })
        }

        res.status(200).json({
            message: "Profile updated successfully!",
            doctor
        })


    } catch (err) {
        return res.status(500).json({
            message: err.message

        })
    }

}