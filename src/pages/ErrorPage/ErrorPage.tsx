import {
  AppShell,
  Avatar,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router';
import sadCat from '../../assets/sad-cat 1.png';

export const ErrorPage = () => {
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
      <AppShell.Main>
        <Card radius="lg">
          <Card.Section p={32} pb={0}>
            <Group justify="space-between">
              <Stack align="flex-start">
                <Title order={2}>Упс! Такой страницы не существует</Title>
                <Text>Давайте перейдём к началу.</Text>
              </Stack>
              <Link to={`/vacancies`}>
                <Button variant="filled" size="md">
                  На главную
                </Button>
              </Link>
            </Group>
          </Card.Section>
          <Card.Section p={32}>
            <Image src={sadCat} />
          </Card.Section>
        </Card>
      </AppShell.Main>
    </AppShell>
  );
};
