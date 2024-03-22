import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAllCourses, getCourseById, createCourse } from '../../services/courseService';

describe('Course Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches all courses successfully', async () => {
    const courses = [{ id: 1, title: 'Introduction to JavaScript' }];
    mock.onGet('/courses').reply(200, courses);

    const result = await getAllCourses();
    expect(result).toEqual(courses);
  });

  it('fetches a course by id successfully', async () => {
    const course = { id: 1, title: 'Introduction to JavaScript' };
    mock.onGet(`/courses/${course.id}`).reply(200, course);

    const result = await getCourseById(course.id);
    expect(result).toEqual(course);
  });

  it('creates a course successfully', async () => {
    const courseData = { title: 'New Course', description: 'Course description' };
    mock.onPost('/courses').reply(200, { ...courseData, id: 2 });

    const result = await createCourse(courseData);
    expect(result).toEqual({ ...courseData, id: 2 });
  });

  it('handles error while fetching all courses', async () => {
    mock.onGet('/courses').networkError();
    await expect(getAllCourses()).rejects.toThrow('Network Error');
  });
});
