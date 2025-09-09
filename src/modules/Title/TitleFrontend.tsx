import { Container, Group, Text, Title } from '@mantine/core';
import { InputSearch } from '../../components/Input/Input';
import './title.css';

export const TitleFrontend = ({ setSearchParams }) => {
  return (
    <Group justify="space-between" className="title">
      <Container style={{ textAlign: 'start' }} m={0} p={0}>
        <Title order={2}>Список вакансий</Title>
        <Text>по профессии Frontend-разработчик</Text>
      </Container>
      <InputSearch setSearchParams={setSearchParams} />
    </Group>
  );
};
