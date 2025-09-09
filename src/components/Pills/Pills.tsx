import {
  Card,
  Input,
  Pill,
  Stack,
  Text,
  Group,
  ActionIcon,
} from '@mantine/core';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { IconPlus } from '@tabler/icons-react';
import {
  addPills,
  changePillsInput,
  removePill,
} from '../../store/reducers/VacanciesSlice';

export const Pills = ({ setSearchParams }) => {
  const pills = useTypedSelector((state) => state.vacancies.pills);
  const value = useTypedSelector((state) => state.vacancies.pillsInput);
  const city = useTypedSelector((state) => state.vacancies.city);
  const search = useTypedSelector((state) => state.vacancies.inputValue);
  const dispatch = useTypedDispatch();

  return (
    <Card mt={20} w={300}>
      <Stack>
        <Text>Ключевые навыки</Text>
        <Group justify="space-around">
          <Input
            value={value}
            onChange={(e) => dispatch(changePillsInput(e.target.value))}
          />
          <ActionIcon
            size="lg"
            onClick={() => {
              const normalized = value.trim();
              if (!normalized || pills.includes(normalized)) return;

              const nextPills = [...pills, normalized];

              setSearchParams({
                city: city,
                vacancies: search,
                pills: nextPills,
              });

              dispatch(addPills(normalized));
              dispatch(changePillsInput(''));
            }}
            variant="filled"
            aria-label="Settings"
          >
            <IconPlus />
          </ActionIcon>
        </Group>
        <Pill.Group>
          {pills.map((el) => (
            <Pill
              key={el}
              withRemoveButton
              onRemove={() => {
                const nextPills = pills.filter((p) => p !== el);
                setSearchParams({
                  city: city,
                  vacancies: search,
                  pills: nextPills,
                });
                dispatch(removePill(el));
              }}
            >
              {el}
            </Pill>
          ))}
        </Pill.Group>
      </Stack>
    </Card>
  );
};
