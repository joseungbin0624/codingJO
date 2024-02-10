const express = require('express');
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');
const { validateCourse } = require('../validators/courseValidator');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/', validateCourse, validateRequest, createCourse);
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.put('/:id', validateCourse, validateRequest, updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
