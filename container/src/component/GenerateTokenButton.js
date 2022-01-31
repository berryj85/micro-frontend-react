import React, { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { generateAccessToken } from "../action/Authentication";
function GenerateTokenButton() {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.CommonProfile)
    const widget = useSelector(state=>state.Widget)
    return (
        <Fragment>
            <div>{profile.accessToken}</div>
            <ul>
                {widget.widgets.map(w=>(
                    <li key={w}>{w}</li>
                ))}
            </ul>
            <button type="button" onClick={() => dispatch(generateAccessToken())}>Generate accessToken</button>
        </Fragment>
    )
}
export default GenerateTokenButton;