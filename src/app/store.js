import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './../slices/counterSlices'

export default configureStore({
  reducer:{
    counter: counterSlice
  }
})