import { Router } from "express"
import { 
    getAllUsers,
    getAllDoctors,
    approveDoctor,
    getAllAppointments
} from '../controllers/admin.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'
import adminMiddleware from '../middleware/admin.middleware.js'

const router = Router()

// Sab users dekho
router.get('/users', authMiddleware, adminMiddleware, getAllUsers )

// Sab doctors dekho
router.get('/doctors', authMiddleware, adminMiddleware, getAllDoctors )

// Sab appointments dekho
router.get('/appointments', authMiddleware, adminMiddleware, getAllAppointments )

// Appointment status update
router.put('/doctors/:id/approve', authMiddleware, adminMiddleware, approveDoctor )

export default router
