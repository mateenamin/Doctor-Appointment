import Appointment from '../models/appointment.model.js'


export const bookAppointment = async (req, res) => {
    try {
        const { doctorId, date, time } = req.body
        const userId = req.user.id

        // Naya appointment banao
        const appointment = new Appointment({
            userID: userId,
            doctorID: doctorId,
            date,
            time
        })

        await appointment.save()

        res.status(201).json({
            message: "Appointment booked successfully!",
            appointment
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getAllAppointments   = async (req ,res) =>{

try {

        const appointment = await Appointment.find({ userID: req.user.id })

        res.status(200).json({

             appointment
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message

        })
    }
    
} 



 
export const getAppointmentById   = async (req ,res) =>{
 
    try {
    
            const appointment = await Appointment.findById(req.params.id)
    
            if (!appointment) {
                return res.status(404).json({
                    message: "appointment not found!"
                })
            }
    
            res.status(200).json({ appointment })
    
    
        } catch (err) {
            return res.status(500).json({
                message: err.message
    
            })
        }


}


export const updateAppointmentStatus  = async (req , res) => {

    try {
            const appointment = await Appointment.findByIdAndUpdate(
                        req.params.id,    // kaun sa appointment update karna hai
                        req.body,         // kya update karna hai
                        { new: true }     // updated data return karo
                    )
            
                    if (!appointment) {
                        return res.status(404).json({
                            message: "appointment not found!"
                        })
                    }
            
                    res.status(200).json({
                        message: "Appointment status updated successfully!",
                        appointment
                    })
            
            
                } catch (err) {
                    return res.status(500).json({
                        message: err.message
            
                    })
                }
    
}