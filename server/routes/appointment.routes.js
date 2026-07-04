import { Router } from "express"
import { 
    bookAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointmentStatus
} from '../controllers/appointment.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'

const router = Router()

// Appointment book karo — sirf logged in user
router.post('/', authMiddleware, bookAppointment)

// Sab appointments dekho
router.get('/', authMiddleware, getAllAppointments)

// Ek appointment detail
router.get('/:id', authMiddleware, getAppointmentById)

// Status update karo — doctor karega
router.put('/:id', authMiddleware, updateAppointmentStatus)

export default router