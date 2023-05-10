const express = require('express');
const { login, storeFormMaster } = require('../controllers/adminController');
const isAuthenticatedUser = require('../middleware/auth');
const { register, updateUser, getUsers, getUserDetails, deleteUser } = require('../controllers/adminController');
const router = express.Router();

router.post('/user-registration', register);    // Create
router.put('/update-user-details/:id', updateUser);    // Update
router.get('/get-user-lists', getUsers);    // All Lists
router.get('/get-user-details/:id', getUserDetails);    // Details
router.delete('/delete-user/:id', deleteUser);    // Delete

router.post('/user-login', login);  // Login API
router.get('/user-list', isAuthenticatedUser, getUsers);    // User Lists After login
router.post('/examination/form-master', isAuthenticatedUser, storeFormMaster);  // Form Master

module.exports = router;