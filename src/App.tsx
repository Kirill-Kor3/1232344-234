import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router';
import { Vacancies } from './pages/VacanciesPage';
import { CardVacanciesPage } from './pages/CardVacancyPage/CardVacancyPage';
import { Layout } from './components/Layout/Layout';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { AboutPage } from './pages/AboutPage/AboutPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/vacancies/moscow" element={<Vacancies />} />
      <Route path="/vacancies/petersburg" element={<Vacancies />} />
      <Route path="/vacancies/:id" element={<CardVacanciesPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

export default function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
