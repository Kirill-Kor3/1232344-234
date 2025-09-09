import { Card, Stack, Text, Title } from '@mantine/core';
import { CardVacancies } from '../../components/CardVacancies/CardVacancies';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../hooks/redux';
import './index.css'

export const CardVacanciesPage = () => {
  const { id } = useParams();
  const data = useTypedSelector((state) => state.vacancies.vacancies?.items);
  const vacancy = data?.find((el) => el.id === id);

  return (
    <Stack align="center">
      <CardVacancies vacancy={vacancy} />
      <Card radius="lg"  maw={660}>
        <Card.Section p={24} className="vacancy-section">
          <Title order={4}>Требования</Title>
          <Text>{vacancy?.snippet?.requirement}</Text>
        </Card.Section>
        <Card.Section pb={24} pl={24} pr={24} className="vacancy-section">
          <Title order={4}>Задачи</Title>
          <Text>{vacancy?.snippet?.responsibility}</Text>
        </Card.Section>
      </Card>
    </Stack>
  );
};
