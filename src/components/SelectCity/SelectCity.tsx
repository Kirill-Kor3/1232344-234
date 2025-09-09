import { Select } from '@mantine/core';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { setCity } from '../../store/reducers/VacanciesSlice';

export const SelectCity = ({ setSearchParams }) => {
  const items = useTypedSelector((state) => state.vacancies.vacancies?.items);
  const search = useTypedSelector((state) => state.vacancies.inputValue);
  const pills = useTypedSelector((state) => state.vacancies.pills);
  const city = useTypedSelector((state) => state.vacancies.city);
  const cities = [...new Set(items?.map((el) => el.area.name))];
  const dispatch = useTypedDispatch();

  return (
    <Select
      value={city || null}
      onChange={(e) => {
        dispatch(setCity(e));
        setSearchParams({
          city: e,
          vacancies: search,
          pills: pills,
        });
      }}
      placeholder="Все города"
      data={cities}
    />
  );
};
