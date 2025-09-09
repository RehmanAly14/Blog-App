import express from 'express'
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getBlogCommentsAdmin, getDashboard} from "../controllers/adminController.js";
import { auth } from '../middleware/auth.js';
const authRouter = express.Router()



authRouter.post('/login',adminLogin)
authRouter.get('/comments',auth,getBlogCommentsAdmin)
authRouter.get('/blogs',auth,getAllBlogsAdmin)
authRouter.post('/delete-comment',auth,deleteCommentById)
authRouter.post('/approve-comment',auth,approveCommentById)
authRouter.get('/dashboard',auth,getDashboard)

export default authRouter