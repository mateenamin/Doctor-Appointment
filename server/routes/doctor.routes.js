import { Router } from "express";
import {getAllDoctors, getDoctorById , updateDoctorProfile} from '../controllers/doctor.controller.js'


const router = Router();


router.get('/', getAllDoctors)

router.get('/id', getDoctorById)

router.put('/profile' , updateDoctorProfile)

export default router