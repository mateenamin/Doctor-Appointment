import { Router } from "express"
import { 
    getAllUsers,
    getAllDoctors,
    approveDoctor,
    getAllAppointments
} from '../controllers/admin.controller.js'

import { Router } from 'express'
import authMiddleware from '../middleware/auth.middleware.js'
import adminMiddleware from '../middleware/admin.middleware.js'

const router = Router()

// Sab users dekho
router.get('/users', authMiddleware, adminMiddleware, )

// Sab doctors dekho
router.get('/doctors', authMiddleware, adminMiddleware, )

// Sab appointments dekho
router.get('/appointments', authMiddleware, adminMiddleware, )

// Appointment status update
router.put('/appointments/:id', authMiddleware, adminMiddleware, )

export default router
