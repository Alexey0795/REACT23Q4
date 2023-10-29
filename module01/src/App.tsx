import { Component, ReactNode } from 'react';
import SomeComponent from './SomeComponent.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import './App.css';

export class App extends Component {
  render(): ReactNode {
    return (
      <ErrorBoundary>
        <SomeComponent />
      </ErrorBoundary>
    );
  }
}
