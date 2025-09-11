import { Card, Stack, Text, Title } from '@mantine/core';

export const AboutPage = () => {
  return (
    <Card radius="md">
      <Stack align='flex-start'>
        <Title order={2}>VIP KAZAH</Title>
        <Text style={{textAlign: 'start'}}>
          Привет! Я - Frontend-разработчик. Пишу приложения на React +
          TypeScript + Redux Toolkit. Еще в баскетбольчик гоняю и на гитаре
          балякаю
        </Text>
      </Stack>
    </Card>
  );
};
