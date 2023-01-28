import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addUser, curUserInfo, setCurUserInfo,btnName,editData} from '../reduxFolder/myRedux'

export function UserAction() {
    const dispatch = useDispatch();
    const userInfo = useSelector(curUserInfo);
    const buttonTitle = useSelector(btnName)
    const avatarRef = useRef();
    const ten = useRef();
    return  <div className="col-md-5">
                <h3 className="title">&nbsp;Action</h3><br/>

                {/* firstName input */}
                <span>first name&nbsp;&nbsp;</span>
                <input onChange={(e) => {
                    try{
                        dispatch(setCurUserInfo({firstName: e.target.value}));
                    }
                    catch(error){}
                }} value={userInfo.firstName}/><br/><br/>

                {/* lastName input */}
                <span>last name&nbsp;&nbsp;&nbsp;</span>
                <input onChange={(e) => {
                    dispatch(setCurUserInfo({lastName:  e.target.value}));
                }} value={userInfo.lastName}/><br/><br/>

                {/* avart input */}
                <span>avatar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input className="btn" id="avatar" onChange={(e) => { 
                    try {
                        let avatarImg = e.target
                            console.log(avatarImg)
                            var fReader = new FileReader();
                            try {
                                fReader.readAsDataURL(avatarImg.files[0]);
                                fReader.onloadend = function(event) {
                                   var img_name = event.target.result;dispatch(setCurUserInfo({avatar: img_name}));
                                }
                            } catch (error) {
                            }
                    } catch (error) {
                    } }} type="file" name="avatar" style={{'display':'none'}} ref={avatarRef}/>
                    {/* {console.log(userInfo)} */}
                <span id="avatar_view" onClick={() => {avatarRef.current.click()}}><img src={userInfo.avatar} /></span>
                <br/><br/>
                {
                    buttonTitle == 'Add new' ?
                        <input type='button' className="btn btn-success" id="add_user" onClick={() => {dispatch(addUser({firstName: userInfo.firstName, lastName: userInfo.lastName, avatar: userInfo.avatar})); dispatch(setCurUserInfo({firstName: '', lastName: '', avatar: ''}))}} value={buttonTitle}/>:
                        <input type='button' className="btn btn-success" id="add_user" onClick={() => {dispatch(editData({firstName: userInfo.firstName, lastName: userInfo.lastName, avatar: userInfo.avatar})); dispatch(setCurUserInfo({firstName: '', lastName: '', avatar: ''}))}} value={buttonTitle}/>
                }
                
            </div>
}