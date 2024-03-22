const forumService = require('../services/forumService');

async function createForum(req, res) {
  try {
    const forum = await forumService.createForum(req.body);
    res.status(201).json(forum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllForums(req, res) {
  try {
    const forums = await forumService.getAllForums();
    res.json(forums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getForumById(req, res) {
  try {
    const forum = await forumService.getForumById(req.params.id);
    res.json(forum);
  } catch (error) {
    res.status(404).json({ message: 'Forum not found' });
  }
}

async function addPostToForum(req, res) {
  try {
    const post = await forumService.addPostToForum(req.params.id, req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createForum, getAllForums, getForumById, addPostToForum };
