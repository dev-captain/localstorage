import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

      var temp = [];
      for(var i = 0; i < localStorage.length; i ++) {
        temp.push({time: localStorage.key(i)});
      }

const initialState = {
    userArr: [],
    curUserInfo: {
        firstName: '',
        lastName: '',
        avatar: ''
    },
    btnName: "Add new",
    no:'',
    storeArr: temp

};

export const localSlice = createSlice({
  name: 'qwe',
  initialState,
  reducers: {
      addUser: (state, action) => {
        //   console.log(action);
          state.userArr = [...state.userArr, {firstName: action.payload.firstName, lastName: action.payload.lastName, avatar: action.payload.avatar}];
   
      },
     
      changeTitle: (state, action) => {
          state.title = 'sdfsdfasdf';
      },
      setCurUserInfo: (state, action) => { 
          console.log(action.payload.avatar);
          var temp = {...state.curUserInfo};
          for(var i in action.payload)  
            eval('temp.' + i + '= action.payload[i]');
          state.curUserInfo = temp;
      },
      editUser: (state, action) => {
        state.no = action.payload.index;
        state.curUserInfo = {firstName: state.userArr[state.no].firstName, lastName: state.userArr[state.no].lastName, avatar: state.userArr[state.no].avatar};
        state.btnName = 'Edit data';
      },
      editData: (state, action) => {
          state.userArr[state.no] = {firstName: action.payload.firstName, lastName: action.payload.lastName, avatar: action.payload.avatar};
          state.btnName = 'Add new'
        },
      
      deleteUser: (state, action) => {
        const no = action.payload.index;
        state.userArr.splice(no,1)
      },
      saveStorage: (state,action) => {
        var ten = new Date();
        var y = ten.getFullYear();
        var m = ten.getMonth();
        var d = ten.getDate();
        var h = ten.getHours();
        var min = ten.getMinutes();
        var sec = ten.getSeconds();
        var storeDate =  y + "." + m + "." + d + "-" + h + ":" + min + ":" + sec
        state.storeArr = [...state.storeArr, {time: storeDate}]
        localStorage.setItem(storeDate,JSON.stringify(state.userArr))
        console.log(storeDate);
      },
      editStorage: (state, action) => {
      var gettime = action.payload.index
      console.log(state.storeArr[gettime].time)
      state.userArr = JSON.parse(localStorage.getItem(state.storeArr[gettime].time))
      console.log()
      },
      deleteStorage: (state, action) => {
        const no = action.payload.index;
        localStorage.removeItem(state.storeArr[no].time)
         state.storeArr.splice(no,1)
      },
  }
});

export const { addUser, changeTitle, setCurUserInfo, editUser, deleteUser,editData,saveStorage,editStorage,deleteStorage } = localSlice.actions;
export const users = (state) => state.localAction.userArr;
export const btnName = (state) => state.localAction.btnName;
export const curUserInfo = (state) => state.localAction.curUserInfo;
export const storeArr = (state) => state.localAction.storeArr;
export default localSlice.reducer;
