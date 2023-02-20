import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {users} from '../reduxFolder/myRedux'
import {addUser, deleteUser,editUser,saveStorage} from "../reduxFolder/myRedux"

export function UserView() {
    const firstPatch = useDispatch();
    const userArr = useSelector(users);
    return  <div className="col-md-7">
                <h3 className="title">&nbsp;Users</h3><br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Aatar</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="user_list">
                        {
                            userArr.map((user, index) => {
                                return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><img src={user.avatar}/></td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td><button onClick = {() => firstPatch(editUser({index}))}>edit</button></td>
                                            <td><button onClick = {() => firstPatch(deleteUser({index}))}>Delete</button></td>
                                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table><br /><br />
                <button className="btn btn-success" id="add_user_list">add new</button>
                <button className="btn btn-success" id="save_data" onClick = {() => firstPatch(saveStorage({userArr}))}>save data</button>
            </div>
}