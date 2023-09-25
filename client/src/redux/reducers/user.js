import Api from '../../config/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { notifyError, notifySuccess } from '../../../Components/Notify/Notify'

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_,thunkAPI)=>{
    try {
      const response = await Api.get('/user')
       return response.data
    } catch (error) {
      let errMsg = error?.response?.data?.message || error?.response?.data?.error
      notifyError(errMsg)
      return thunkAPI.rejectWithValue(error.message);

 
    }
  }

  
)
export const userLogout = createAsyncThunk(
  "user/userLogout",
  async (_,thunkAPI)=>{
    try {
      const response = await Api.post('/user/logout')
      return response.data
    } catch (error) {
      let errMsg = error?.response?.data?.message || error?.response?.data?.error
      notifyError(errMsg)
      return thunkAPI.rejectWithValue(error.message);

 
    }
  }

  
)

export const user = createSlice({
  name: 'user',
  initialState:{
    data:[] ,
    isLogin:false
  },
  reducers: {
    login : (state)=>{
        state.isLogin = true
    },
 
    logout : (state)=>{
        state.isLogin = false
    }
 
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchUserData.fulfilled,(state,action)=>{
      state.data=action.payload
      console.log("Payload in action:", action.payload);

      state.isLogin = true
    })
    builder.addCase(userLogout.fulfilled,(state,action)=>{
       state.isLogin = false
    })
  }

})
 
export const { login , logout  } = user.actions

export default user.reducer