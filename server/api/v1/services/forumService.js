const Forum = require('../models/Forum');
const Post = require('../models/Post'); // 포스트 모델 참조

// 포럼 생성
async function createForum(forumData) {
  const forum = new Forum(forumData);
  await forum.save();
  return forum;
}

// 모든 포럼 조회
async function getAllForums() {
  const forums = await Forum.find({});
  return forums;
}

// 특정 포럼 조회 (포스트 포함)
async function getForumById(id) {
  const forum = await Forum.findById(id);
  if (!forum) {
    throw new Error('Forum not found');
  }
  // 해당 포럼에 속한 포스트들을 조회
  const posts = await Post.find({ forum: id }).populate('author');
  return { ...forum.toObject(), posts };
}

// 포럼에 포스트 추가
async function addPostToForum(forumId, postData) {
  // 먼저 포럼이 존재하는지 확인
  const forum = await Forum.findById(forumId);
  if (!forum) {
    throw new Error('Forum not found');
  }

  // 포스트 데이터에 포럼 ID 추가
  const post = new Post({ ...postData, forum: forumId });
  await post.save();
  
  // 포스트를 추가한 후, 포스트를 포함한 포럼 정보를 반환할 필요는 없으므로,
  // 새로 추가된 포스트만 반환
  return post;
}

module.exports = { createForum, getAllForums, getForumById, addPostToForum };

