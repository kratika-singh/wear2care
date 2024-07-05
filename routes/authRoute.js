import express from 'express';
import {registerController,loginController,testController} from '../controllers/authController.js';
import { requireSignIn , isAdmin} from '../middleware/authMiddleware.js';
// router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register',registerController);
export default router;

// LOGIN || POST
router.post('/login',loginController);

//test routes
router.get('/test',requireSignIn,isAdmin,testController);
