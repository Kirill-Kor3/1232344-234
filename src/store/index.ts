import { combineReducers, configureStore } from '@reduxjs/toolkit';
import VacanciesReducer from './reducers/VacanciesSlice';

const rootReducer = combineReducers({
  vacancies: VacanciesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
