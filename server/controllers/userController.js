const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 로그인 기능
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.registerUser = async (req, res) => {
  try {
    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(req.body.email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // 비밀번호 유효성 검사 (최소 8자, 최소 하나의 문자와 하나의 숫자 포함)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(req.body.password)) {
      return res.status(400).json({ message: "Password must be at least 8 characters long and include at least one letter and one number" });
    }

    // 이메일 또는 사용자명 중복 확인
    const existingUser = await User.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] });
    if (existingUser) {
      return res.status(400).json({ message: "Email or username already exists" });
    }

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // 사용자 생성
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User created successfully", userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getUserProfile = async (req, res) => {
  try {
    // 인증된 사용자의 ID로 사용자 정보 조회
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateUserProfile = async (req, res) => {
  try {
    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // 사용자명 유효성 검사 (예: 알파벳과 숫자만 허용)
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(req.body.username)) {
      return res.status(400).json({ message: "Invalid username format" });
    }
    
    // 인증된 사용자의 ID로 사용자 정보 조회 및 업데이트
    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, { new: true }).select('-password');
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

