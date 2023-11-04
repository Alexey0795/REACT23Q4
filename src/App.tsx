import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { SearchComponent } from './SearchComponent.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import './App.css';
import { PlanetPage } from './PlanetPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SearchComponent />}>
      <Route path="planets/:id" element={<PlanetPage />} />
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Route>
  )
);

export function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
