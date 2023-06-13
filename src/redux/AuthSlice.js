import { createSlice } from '@reduxjs/toolkit';


export const AuthSlice   = createSlice({
	name: 'auth',
	initialState:{
		value:false,
	  },
	reducers: {
		Login: (state, action) => {
			state.value=action.payload
		},
        Logout:(state,action)=>{
            state.value=action.payload
        }
	},
});


export const { Login,Logout } = AuthSlice.actions;

export default AuthSlice.reducer;