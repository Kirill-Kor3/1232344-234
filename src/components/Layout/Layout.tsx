import { AppShell, Avatar, Grid, Group, Image, Text } from '@mantine/core';
import logo from '../../assets/logo.svg';
import { Link, NavLink, Outlet } from 'react-router';

export const Layout = () => {
  return (
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
              <NavLink to="/vacancies">
                Вакансии FE
              </NavLink>
              <Group gap={5}>
                <Avatar radius="xl" />
                <NavLink to='/about'>Обо мне</NavLink>
              </Group>
            </Group>
          </Grid.Col>
        </Grid>
      </AppShell.Header>
      <AppShell.Main w="75vw">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
