const multer = require('multer');
const path = require('path');

// 파일 저장을 위한 multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 파일이 저장될 경로
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일명 설정
  },
});

const fileFilter = (req, file, cb) => {
  // 파일 유형 검사
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 1024 * 1024 * 5 } }); // 5MB 파일 사이즈 제한

module.exports = upload;
