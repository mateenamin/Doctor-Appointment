import  { Router } from 'express';
import { signUser, loginUser , logoutUser } from '../controllers/auth.controller.js'
import authMiddleware from '../Middleware/auth.middleware.js'

const router = Router()


router.post( '/signup' , signUser )
router.post('/login' , loginUser )
router.post('/logout', authMiddleware, logoutUser)


export default router;