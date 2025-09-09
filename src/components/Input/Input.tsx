import { Group, Input, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useTypedSelector, useTypedDispatch } from '../../hooks/redux';
import { changeValueInput } from '../../store/reducers/VacanciesSlice';
import { fetchVacancies } from '../../store/reducers/VacanciesThunks';
import './input.css';

export const InputSearch = ({ setSearchParams }) => {
  const value = useTypedSelector((state) => state.vacancies.inputValue);
  const pills = useTypedSelector((state) => state.vacancies.pills);
  const city = useTypedSelector((state) => state.vacancies.city);
  const dispatch = useTypedDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    setSearchParams({
      city: city,
      vacancies: value,
      pills: pills,
    });
    dispatch(fetchVacancies(value));
  }

  return (
    <Group>
      <form className="search-vacancies" onSubmit={handleSubmit}>
        <Input
          w={400}
          name="search"
          value={value}
          onChange={(e) => dispatch(changeValueInput(e.target.value))}
          size="md"
          radius="md"
          placeholder="Должность или название компании"
          leftSection={<IconSearch size={16} style={{ color: '#0F0F10' }} />}
        />
        <Button type="submit" variant="filled" color="#4263EB" size="md">
          Найти
        </Button>
      </form>
    </Group>
  );
};
