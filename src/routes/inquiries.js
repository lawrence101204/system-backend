const express = require("express");
const router = express.Router();
const c = require("../controllers/inquiriesController");
const protect = require("../middlewares/authMiddleware");

// 🌍 Client submits inquiry
router.post("/", c.create);

// 🔒 Admin views & deletes
router.get("/", protect, c.list);
router.delete("/:id", protect, c.remove);

module.exports = router;
