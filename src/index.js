import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot로 컨테이너 루트 생성
root.render(<App />); // root.render로 앱 렌더링
