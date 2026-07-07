import express from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated.js'
import { generateWebsite, changeWebsite, getWebsiteById, getAllWebsite, deployWebsite, getBySlug } from '../controllers/websiteController.js'


const router = express.Router()

router.post('/generate', isAuthenticated, generateWebsite)
router.post('/update/:id', isAuthenticated, changeWebsite)
router.get('/getbyid/:id', isAuthenticated, getWebsiteById)
router.get('/getall', isAuthenticated, getAllWebsite)
router.get('/deploy/:id', isAuthenticated, deployWebsite)
router.get('/getbyslug/:slug', isAuthenticated, getBySlug)

export default router