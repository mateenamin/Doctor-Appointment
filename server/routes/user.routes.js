import  { Router } from 'express';
import { signUser, loginUser } from '../controllers/user.controller.js'

const router = Router()


router.post( '/signup' , signUser )
router.post('/login' , loginUser )

export default router;