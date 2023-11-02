import { Component } from 'react';
import SearchComponent from './SearchComponent.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import './App.css';

export class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <SearchComponent />
      </ErrorBoundary>
    );
  }
}
