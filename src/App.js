import React from 'react';
import WindowDimensionsProvider from './components/WindowDimensionsProvider';
import Content from './components/Content';
import './styles.css';

export default function App() {
  return (
    <WindowDimensionsProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Content />
      </div>
    </WindowDimensionsProvider>
  );
}
