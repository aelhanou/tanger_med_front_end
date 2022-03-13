import { configureStore } from '@reduxjs/toolkit'
import { DashboardSlice } from "./pages"


export const store = configureStore({
  reducer: {
    dashboard: DashboardSlice,
    // dashboard:DashboardSlice,
    // reservation:ReservationSlice
  }
})




