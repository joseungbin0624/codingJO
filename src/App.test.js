import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { Provider } from 'react-redux';
import store from '../src/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App 컴포넌트의 라우트 테스트', () => {
  it('홈페이지가 정상적으로 렌더링되는지 확인', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(screen.getByText(/Welcome to CodingJO!/i)).toBeInTheDocument();
  });

  it('/achievements 경로가 정상적으로 렌더링되는지 확인', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    window.history.pushState({}, '', '/achievements');
    expect(screen.getByText(/Your Achievements/i)).toBeInTheDocument();
  });

  // 이하 각 경로에 대한 렌더링 테스트를 추가합니다. 예를 들어:
  it('/analytics 경로가 정상적으로 렌더링되는지 확인', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    window.history.pushState({}, '', '/analytics');
    expect(screen.getByText(/Analytics Overview/i)).toBeInTheDocument();
  });
// 카테고리 페이지 렌더링 테스트
it('/categories 경로가 정상적으로 렌더링되는지 확인', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  window.history.pushState({}, '', '/categories');
  expect(screen.getByText(/Explore Categories/i)).toBeInTheDocument();
});

// 채팅 페이지 렌더링 테스트
it('/chats 경로가 정상적으로 렌더링되는지 확인', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  window.history.pushState({}, '', '/chats');
  expect(screen.getByText(/Your Chats/i)).toBeInTheDocument();
});

// 협업 페이지 렌더링 테스트
it('/collaboration 경로가 정상적으로 렌더링되는지 확인', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  window.history.pushState({}, '', '/collaboration');
  expect(screen.getByText(/Collaborate with Us/i)).toBeInTheDocument();
});

// 강좌 상세 페이지 렌더링 테스트
it('/courses/:courseId 경로가 정상적으로 렌더링되는지 확인', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  window.history.pushState({}, '', '/courses/1');
  expect(screen.getByText(/Back to Dashboard/i)).toBeInTheDocument();
});

// 대시보드 페이지 렌더링 테스트
it('/dashboard 경로가 정상적으로 렌더링되는지 확인', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  window.history.pushState({}, '', '/dashboard');
  expect(screen.getByText(/Your Dashboard/i)).toBeInTheDocument();
});

// 이벤트 캘린더 페이지 렌더링 테스트
it('/events-calendar 경로가 정상적으로 렌더링되는지 확인', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  window.history.pushState({}, '', '/events-calendar');
  expect(screen.getByText(/Back to Home/i)).toBeInTheDocument();
});

// 즐겨찾기 페이지 렌더링 테스트
it('/favorites 경로가 정상적으로 렌더링되는지 확인', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  window.history.pushState({}, '', '/favorites');
  expect(screen.getByText(/Your Favorites/i)).toBeInTheDocument();
});

// 피드백 페이지 렌더링 테스트
it('/feedback 경로가 정상적으로 렌더링되는지 확인', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  window.history.pushState({}, '', '/feedback');
  expect(screen.getByText(/Provide Your Feedback/i)).toBeInTheDocument();
});

// 포럼 페이지 렌더링 테스트
it('/forum 경로가 정상적으로 렌더링되는지 확인', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  window.history.pushState({}, '', '/forum');
  expect(screen.getByText(/Community Forums/i)).toBeInTheDocument();
});
 // 이하 각 경로에 대한 렌더링 테스트를 계속 추가할 수 있습니다. 각 페이지의 고유한 텍스트나 요소를 이용하여 해당 페이지가 정상적으로 렌더링되었는지 확인합니다.
});
