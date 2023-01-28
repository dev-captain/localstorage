import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addUser, deleteUser,editUser,storeArr,editStorage,deleteStorage} from "../reduxFolder/myRedux"

export function LocalView() {
   const viewArr = useSelector(storeArr)
   const dispatch = useDispatch();
    return <div className="col-md-3 side">
                <h3 className="title">Saved Data</h3><br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Create date</th>
                            <th>view</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody id="local_list">
                        {viewArr.map((view , index) => {
                                return (
                                    <tr key={index}>
                                        <td>{view.time}</td>
                                        <td><button onClick = {() => dispatch(editStorage({index}))}>edit</button></td>
                                        <td><button onClick = {() => dispatch(deleteStorage({index}))}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
}