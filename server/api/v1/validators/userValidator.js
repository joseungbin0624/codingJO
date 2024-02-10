const { body } = require('express-validator');

exports.validateUserRegistration = [
  body('email').trim().isEmail().withMessage('유효한 이메일을 입력해주세요.'),
  body('password').isLength({ min: 6 }).withMessage('비밀번호는 최소 6자 이상이어야 합니다.'),
  body('username').trim().notEmpty().withMessage('사용자 이름은 필수입니다.').isLength({ min: 3, max: 30 }).withMessage('사용자 이름은 3자 이상 30자 이하로 설정해주세요.'),
];

// 로그인 유효성 검사 추가
exports.validateLogin = [
  body('email').trim().isEmail().withMessage('유효한 이메일을 입력해주세요.'),
  body('password').notEmpty().withMessage('비밀번호를 입력해주세요.')
];
exports.validateUserUpdate = [
    // 사용자 정보 업데이트 유효성 검사 로직
    body('email').optional().trim().isEmail().withMessage('유효한 이메일을 입력해주세요.'),
    body('username').optional().trim().notEmpty().withMessage('사용자 이름은 필수입니다.'),
    // 필요한 다른 필드에 대한 유효성 검사 추가
  ];
  