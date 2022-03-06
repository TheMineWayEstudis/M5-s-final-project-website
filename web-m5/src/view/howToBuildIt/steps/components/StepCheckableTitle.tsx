import { Checkbox, Tooltip } from "antd";
import { useState } from "react";

type Props = {
    children: JSX.Element | JSX.Element[] | string;
}

export default function StepCheckableTitle(props: Props) {
    const [ isDone, setDoneState ] = useState<boolean>(false);

    return (
        <Tooltip
            title={isDone ? "Mark as undone" : "Mark as done"}
        >
            <Checkbox value={isDone} onChange={(e) => setDoneState(e.target.checked)} style={{fontSize: 28}}><h2 style={{fontSize: 28}}><b>{props.children}</b></h2></Checkbox>
        </Tooltip>
    );
}