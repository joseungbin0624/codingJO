// 이벤트 관련 유틸리티
const { getAllEvents, getEventById } = require('../../server/api/v1/services/eventService');

// 모든 이벤트를 조회하는 함수
async function fetchAllEvents() {
  return await getAllEvents();
}

// 특정 이벤트의 상세 정보를 조회하는 함수
async function fetchEventDetails(eventId) {
  return await getEventById(eventId);
}

module.exports = { fetchAllEvents, fetchEventDetails };
