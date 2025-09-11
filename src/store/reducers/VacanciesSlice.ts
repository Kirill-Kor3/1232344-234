import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchVacancies } from './VacanciesThunks';

interface vacanciesData {
  items: [];
  found: number;
  pages: number;
  page: number;
  per_page: number;
  clusters: null;
  arguments: null;
  fixes: null;
  suggests: null;
  alternate_url: string;
}

interface vacanciesState {
  vacancies: vacanciesData | null;
  filteredItems: [];
  city: string;
  inputValue: string;
  pills: Array<string>;
  pillsInput: string;
}

const initialState: vacanciesState = {
  vacancies: {
    items: [],
    found: 0,
    pages: 0,
    page: 0,
    per_page: 0,
    clusters: null,
    arguments: null,
    fixes: null,
    suggests: null,
    alternate_url: '',
  },
  filteredItems: [],
  city: '',
  inputValue: '',
  pills: [],
  pillsInput: '',
};

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    changeValueInput: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    addPills: (state, action: PayloadAction<string>) => {
      state.pills.push(action.payload);
    },
    removePill: (state, action: PayloadAction<string>) => {
      state.pills = state.pills.filter((p) => p !== action.payload);
    },
    changeItems: (state, action) => {
      state.vacancies = action.payload;
      state.filteredItems = action.payload;
    },
    setPills: (state, action) => {
      state.pills === action.payload;
    },
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    },
    changePillsInput: (state, action: PayloadAction<string>) => {
      state.pillsInput = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchVacancies.fulfilled,
      (state, action: PayloadAction<vacanciesData>) => {
        state.vacancies = action.payload;
      }
    );
  },
});

export const {
  changeValueInput,
  addPills,
  removePill,
  changeItems,
  changePillsInput,
  setFilteredItems,
  setCity,
  setPills,
} = vacanciesSlice.actions;
export default vacanciesSlice.reducer;
