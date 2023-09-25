import Api from '../../config/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { notifyError } from '../../../Components/Notify/Notify'

export const fetchBlogs= createAsyncThunk(
  "user/fetchBlogs",
  async (_,thunkAPI)=>{
    try {
      const response = await Api.get('/blog')
       return response.data
    } catch (error) {
      let errMsg = error?.response?.data?.message || error?.response?.data?.error
      notifyError(errMsg)
      return thunkAPI.rejectWithValue(error.message);

 
    }
  }

  
)

export const user = createSlice({
  name: 'blog',
  initialState:{
    data:[] ,
  },
  reducers: {

  },
  extraReducers: (builder)=>{
    builder.addCase(fetchBlogs.fulfilled,(state,action)=>{
      state.data=action.payload
      console.log("Payload in action:", action.payload);
    })

  }

})
 
 
export const { login , logout  } = user.actions

export default user.reducer