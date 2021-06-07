import { configureStore } from '@reduxjs/toolkit'
import downloadReducer from "./features/download_manager/downloadSlice"

export default configureStore({
  reducer: {
      download:downloadReducer
  },
})