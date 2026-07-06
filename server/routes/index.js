import { Router } from "express";
import authRoutes from './auth.routes.js';
import adminRoutes from './admin.routes.js';
import doctorRoutes from './doctor.routes.js';
import appointmentRoutes from './appointment.routes.js';



const router = Router();

router.use('/auth' , authRoutes);
router.use('/admin', adminRoutes)
router.use('/doctors', doctorRoutes);
router.use('/appointment' , appointmentRoutes);


export default router;
