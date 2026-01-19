import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define types for form data
interface Page1Data {
  fname: string
  email: string
  password: string
  phone: string
}

interface Page2Data {
  streetAddress: string
  city: string
  state: string
  postalCode: string
  country: string
}

interface FormState {
  page1: Page1Data
  page2: Page2Data
}

// Define the initial state
const initialState: FormState = {
  page1: {
    fname: '',
    email: '',
    password: '',
    phone: '',
  },
  page2: {
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // Page 1 actions
    updatePage1: (state, action: PayloadAction<Partial<Page1Data>>) => {
      state.page1 = { ...state.page1, ...action.payload }
    },
    // Page 2 actions
    updatePage2: (state, action: PayloadAction<Partial<Page2Data>>) => {
      state.page2 = { ...state.page2, ...action.payload }
    },
    // Reset all data
    resetForm: (state) => {
      state.page1 = initialState.page1
      state.page2 = initialState.page2
    },
  },
})

export const { updatePage1, updatePage2, resetForm } = formSlice.actions

// Selectors
export const selectPage1Data = (state: RootState) => state.form.page1
export const selectPage2Data = (state: RootState) => state.form.page2

export default formSlice.reducer