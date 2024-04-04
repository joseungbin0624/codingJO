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
            console.log(`Course not found with ID: ${req.params.id}`); // 추가된 로그
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        console.error(`Error getting course by ID: ${req.params.id}`, error); // 추가된 로그
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
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: 'Validation error: ' + error.message });
        } else {
            res.status(500).json({ message: 'Server error: ' + error.message });
        }
    }
}

async function deleteCourse(req, res) {
    try {
        const deleteResult = await courseService.deleteCourse(req.params.id);
        if (!deleteResult) {
            return res.status(404).json({ message: 'Course not found' });
        }
        // 수정: 삭제 성공 응답 메시지 추가
        res.status(204).json({ message: 'Course successfully deleted' });
    } catch (error) {
        // 보완된 오류 처리 로직
        res.status(500).json({ message: 'An error occurred while deleting the course: ' + error.message });
    }
}

module.exports = { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse };
