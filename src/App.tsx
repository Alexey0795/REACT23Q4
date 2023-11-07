import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SearchComponent } from './SearchComponent.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import './App.css';
import { PlanetPage } from './PlanetPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchComponent />,
    children: [
      {
        path: 'planets/:name',
        element: <PlanetPage />,
        errorElement: <h1>wtf</h1>,
      },
    ],
  },
  {
    path: '*',
    element: <h1>404 Not found</h1>,
  },
]);

export function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
