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


