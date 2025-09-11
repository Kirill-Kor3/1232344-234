import { Badge, Card, Text, Group, Button, Stack } from '@mantine/core';
import { Link } from 'react-router';

export const CardVacancies = ({ vacancy }) => {
  function getSalary(salary) {
    if (salary === null) return 'Уровень дохода не указан';
    if (salary.from !== null && salary.to !== null)
      return `${salary.from} - ${salary.to} ${salary.currency}`;
    if (salary.from === null) return `до ${salary.to} ${salary.currency}`;
    if (salary.to === null) return `от ${salary.from} ${salary.currency}`;
  }

  function getWorkFormat(format) {
    if (format.length === 0) return null;
    if (format[0].id === 'REMOTE')
      return (
        <Badge color="#4263EB" radius="xs">
          {format[0].name}
        </Badge>
      );
    if (format[0].id === 'ON_SITE')
      return (
        <Badge color="#E7E7E7" radius="xs">
          {format[0].name}
        </Badge>
      );
  }

  console.log(vacancy);
  return (
    <Card radius="lg" w={660} mih={250}>
      <Stack p={24} h="100%" justify="space-between" align="flex-start">
        <Card.Section>
          <Stack gap={5} align="flex-start">
            <Text style={{ textAlign: 'start' }} c="#364FC7" fz={20}>
              {vacancy.name}
            </Text>
            <Group>
              <Text c="black" fz={16}>
                {getSalary(vacancy.salary)}
              </Text>
              <Text c="gray" fz={14}>
                {vacancy.experience.name}
              </Text>
            </Group>
          </Stack>
        </Card.Section>
        <Card.Section>
          <Stack align="flex-start" gap={5}>
            <Text c="gray">{vacancy.employer.name}</Text>
            {getWorkFormat(vacancy.work_format)}
            <Text>
              {vacancy.address !== null
                ? vacancy.address.city
                : 'Адрес не указан'}
            </Text>
          </Stack>
        </Card.Section>
        <Card.Section>
          <Group>
            <Link to={`/vacancies/${vacancy.id}`}>
              <Button color="black" variant="filled" size="md">
                Смотреть вакансию
              </Button>
            </Link>
            <Link to={vacancy.alternate_url}>
              <Button color="#E7E7E7" variant="filled" size="md">
                Откликнуться
              </Button>
            </Link>
          </Group>
        </Card.Section>
      </Stack>
    </Card>
  );
};
