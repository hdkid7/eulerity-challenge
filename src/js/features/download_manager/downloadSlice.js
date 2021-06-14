import {createSlice} from '@reduxjs/toolkit'


export const downloadSlice = createSlice({
    name:'download',
    initialState:{
        value:[],
        checkedState:[]
    },
    reducers:{
        addDownload: (state,obj) => {
            return {...state.value,value:[...state.value,obj.payload.imageUrl]
                ,checkedState:[...state.checkedState,obj.payload.title]}
        } ,
        removeDownload:(state,obj) => {
            return {...state.value,value:state.value.filter(img =>img !== obj.payload.imageUrl),
                ...state.checkedState,checkedState:state.checkedState.filter(title => title !== obj.payload.title)
          
            }
        }, addAllToDownload: (state,obj) => {
            return {...state.value,value:obj.payload.arr
                ,...state.checkedState, checkedState:obj.payload.title}
        } ,
        removeAllFromDownload: (state) => {
            return {...state.value,value:[]
                ,...state.checkedState, checkedState:[]}
        }
        
    

        
    }
})


export const {addDownload, removeDownload,addAllToDownload,removeAllFromDownload} = downloadSlice.actions

export default downloadSlice.reducer