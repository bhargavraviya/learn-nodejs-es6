import express from 'express';
// import { register, login } from '../controllers/authController.js';
import { register, login } from '../controllers/authMongoController.js';
// import { users } from '../controllers/userController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Learning Node JS' });
});

router.route('/register').post(register);
router.route('/login').post(login);
// router.route('/users').get(users);

export default router;
