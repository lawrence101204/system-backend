const express = require('express');
const router = express.Router();
const c = require('../controllers/toursController');
const v = require('../validators/tourValidators');
const protect = require('../middlewares/authMiddleware');

// ✅ PUBLIC ROUTES (CLIENT)
router.get('/', v.validateToursListQuery, c.list);
router.get('/:id', v.validateTourId, c.get);

// 🔒 ADMIN ROUTES
router.post('/', protect, v.validateTourCreate, c.create);
router.put('/:id', protect, v.validateTourUpdate, c.update);
router.delete('/:id', protect, v.validateTourId, c.remove);

module.exports = router;
