import './App.css';
import '@mantine/core/styles.css';
import {
  AppShell,
  Avatar,
  Grid,
  Group,
  Image,
  MantineProvider,
  Text,
} from '@mantine/core';
import logo from './assets/logo.svg';
import { Routes, Route, Link } from 'react-router';
import { Vacancies } from './pages/VacanciesPage';
import { CardVacanciesPage } from './pages/CardVacancyPage/CardVacancyPage';

export default function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header className="header" withBorder={false} pl={20} pt={10}>
          <Grid align="center" columns={12}>
            <Grid.Col span={5}>
              <Group>
                <Image h={30} w={30} src={logo} />
                <Text>.FrontEnd</Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={7}>
              <Group gap={30}>
                <Link to="/" className="menu__item_active">
                  Вакансии FE
                </Link>
                <Group gap={5}>
                  <Avatar radius="xl" />
                  <a href="#">Обо мне</a>
                </Group>
              </Group>
            </Grid.Col>
          </Grid>
        </AppShell.Header>
        <AppShell.Main w="75vw">
          <Routes>
            <Route path="/" element={<Vacancies />} />
            <Route path="/vacancies/:id" element={<CardVacanciesPage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
