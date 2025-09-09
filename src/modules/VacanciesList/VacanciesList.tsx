import { Group, Pagination, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { fetchVacancies } from '../../store/reducers/VacanciesThunks';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { CardVacancies } from '../../components/CardVacancies/CardVacancies';
import { Pills } from '../../components/Pills/Pills';
import { SelectCity } from '../../components/SelectCity/SelectCity';

export const VacanciesList = ({ setSearchParams }) => {
  const data = useTypedSelector((state) => state.vacancies.vacancies?.items);
  const city = useTypedSelector((state) => state.vacancies.city);
  const pills = useTypedSelector((state) => state.vacancies.pills);
  const dispatch = useTypedDispatch();

  const [page, setPage] = useState(1);
  const source = (data ?? []) as unknown as VacancyItem[];
  const filtered = source.filter((el) => {
    const matchesCity = !city || el.area.name === city;
    const matchesPills =
      !pills?.length ||
      pills.every((pill) =>
        (el.snippet.requirement?.toLowerCase() || '').includes(
          pill.toLowerCase().trim()
        )
      );

    return matchesCity && matchesPills;
  });
  const pageSize = 6;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const currentJobs = filtered.slice(start, end);

  useEffect(() => {
    dispatch(fetchVacancies(''));
  }, [dispatch]);

  useEffect(() => {
    setPage(1);
  }, [city, pills]);

  return (
    <Group align="flex-start" justify="space-between">
      <Stack>
        <Pills setSearchParams={setSearchParams} />
        <SelectCity setSearchParams={setSearchParams} />
      </Stack>
      <Stack align="flex-end" mt={20}>
        <Stack align="center">
          {/* {filterJobs.length !== 0
            ? filterJobs?.map((el) => <CardVacancies vacancy={el} />)
            : currentJobs?.map((el) => <CardVacancies vacancy={el} />)} */}
          {currentJobs.map((el) => (
            <CardVacancies key={el.id} vacancy={el} />
          ))}
          <Pagination
            total={Math.max(1, Math.ceil(filtered.length / pageSize))}
            value={page}
            onChange={setPage}
            mt="lg"
          />
        </Stack>
      </Stack>
    </Group>
  );
};
