const ForumPost = require('../models/Forum');

// 커뮤니티 글 목록 조회
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await ForumPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// 새 글 작성
exports.createPost = async (req, res) => {
  try {
    const { title, content, user } = req.body;
    const newPost = new ForumPost({ title, content, user });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
