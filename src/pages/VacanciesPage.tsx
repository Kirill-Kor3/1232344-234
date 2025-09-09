import { useSearchParams } from 'react-router';
import { TitleFrontend } from '../modules/Title/TitleFrontend';
import { VacanciesList } from '../modules/VacanciesList/VacanciesList';
import { useTypedDispatch } from '../hooks/redux';
import {
  changeValueInput,
  setCity,
  setPills,
} from '../store/reducers/VacanciesSlice';
import { fetchVacancies } from '../store/reducers/VacanciesThunks';
import { useEffect } from 'react';

export const Vacancies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const vacanciesQuery = searchParams.get('vacancies') || '';
  const cityVacancies = searchParams.get('city') || '';
  const pillsQuery = searchParams.get('pills') || '';

  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (vacanciesQuery) {
      dispatch(changeValueInput(vacanciesQuery));
      dispatch(fetchVacancies(vacanciesQuery));
    }
    if (cityVacancies) {
      dispatch(setCity(cityVacancies));
    }
  }, [vacanciesQuery, cityVacancies, pillsQuery]);

  return (
    <>
      <TitleFrontend setSearchParams={setSearchParams} />
      <VacanciesList setSearchParams={setSearchParams} />
    </>
  );
};
