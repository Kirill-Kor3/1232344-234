import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVacancies = createAsyncThunk(
  'vacancies/fetchVacancies',

  async function(value: string, { rejectWithValue }) {
    try {
      const response = await fetch(`https://api.hh.ru/vacancies?industry=7&professional_role=96&per_page=100&text=${value}`)

      if(!response.ok) throw new Error('Server Error!')

      const data = await response.json()

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)