import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllWidget } from "../action/Widget";

function WidgetContainer() {
    const dispatch = useDispatch()
    dispatch(loadAllWidget(["fasdf", "fadsf"]))
    const widget = useSelector(state=>state.Widget)

    return (
        <div>
            <ul>
                {widget.widgets.map(w => (
                    <li key={w}>{w}</li>
                ))}
            </ul>
            <div>WidgetContainer</div>
        </div>
    );
}
export default WidgetContainer;