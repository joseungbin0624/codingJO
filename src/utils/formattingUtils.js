// 데이터 포매팅 유틸리티
const moment = require('moment');

// 날짜를 "YYYY-MM-DD" 형식으로 포매팅하는 함수
function formatDate(date) {
  return moment(date).format('YYYY-MM-DD');
}

// 숫자를 통화 형식("1,000")으로 포매팅하는 함수
function formatNumber(number) {
  return number.toLocaleString();
}

module.exports = { formatDate, formatNumber };
