import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

function AccessTokenPanel() {
    const profile = useSelector(state => state.CommonProfile)
    return (
        <div>{profile.accessToken}</div>
    );
}
export default AccessTokenPanel;