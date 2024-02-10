const forumService = require('../services/forumService');

// 포럼 생성
async function createForum(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const forum = await forumService.createForum(req.body);
    res.status(201).json(forum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// 모든 포럼 조회
async function getAllForums(req, res) {
  try {
    const forums = await forumService.getAllForums();
    res.json(forums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// 특정 포럼 조회
async function getForumById(req, res) {
  try {
    const forumId = req.params.forumId;
    const forum = await forumService.getForumById(forumId);
    if (!forum) {
      return res.status(404).json({ message: 'Forum not found' });
    }
    res.json(forum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createForum, getAllForums, getForumById };
