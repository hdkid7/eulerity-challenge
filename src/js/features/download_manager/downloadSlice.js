import {createSlice} from '@reduxjs/toolkit'


export const downloadSlice = createSlice({
    name:'download',
    initialState:{
        value:[],
        checkedState:[]
    },
    reducers:{
        addDownload: (state,obj) => {
            console.log(obj)
            return {...state.value,value:[...state.value,obj.payload.imageUrl]
                ,checkedState:[...state.checkedState,obj.payload.title]}
        } ,
        removeDownload:(state,obj) => {
            return {...state.value,value:state.value.filter(img =>img !== obj.payload.imageUrl),
                ...state.checkedState,checkedState:state.checkedState.filter(title => title !== obj.payload.title)
          
            }
        }

        
    }
})


export const {addDownload, removeDownload} = downloadSlice.actions

export default downloadSlice.reducer