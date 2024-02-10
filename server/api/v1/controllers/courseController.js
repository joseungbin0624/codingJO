const courseService = require('../services/courseService');

async function createCourse(req, res) {
    try {
        const course = await courseService.createCourse(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAllCourses(req, res) {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getCourseById(req, res) {
    try {
        const course = await courseService.getCourseById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateCourse(req, res) {
    try {
        const updatedCourse = await courseService.updateCourse(req.params.id, req.body);
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteCourse(req, res) {
    try {
        await courseService.deleteCourse(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse };
