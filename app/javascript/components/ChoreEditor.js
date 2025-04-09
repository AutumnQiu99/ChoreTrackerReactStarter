import React, { useEffect, useState } from "react";
import Select from "./shared/form/Select";
import StringInput from "./shared/form/StringInput";
import { get, post } from "../api";

function ChoreEditor() {
    const [childOptions, setChildOptions] = useState([]);
    const [taskOptions, setTaskOptions] = useState([]);
    const [loading, setLoading] = useState();
    const [animating, setAnimating] = useState(false);
    const [child, setChild] = useState();
    const [task, setTask] = useState();
    const [dueOn, setDueOn] = useState("");

    // Let's get the options for our two select menus
    useEffect(() => {
        setLoading(true);
        get(`/v1/children/`).then((response) => {
            setLoading(false);
            setChildOptions(
                response.data.map((child) => {
                    return {
                        label: child.attributes.name,
                        value: child.id,
                    };
                })
            );
        });
        get(`/v1/tasks/`).then((response) => {
            setLoading(false);
            setTaskOptions(
                response.data.map((task) => {
                    return {
                        label: task.attributes.name,
                        value: task.id,
                    };
                })
            );
        });
    }, []);

    if (loading || childOptions?.length === 0) {
        return <div>loading...</div>;
    }

    return (
        <>
            <label htmlFor="children">Child</label>
            <Select
                name="children"
                inputId="children"
                setValue={setChild}
                options={childOptions}
            />

            <label htmlFor="tasks">Task</label>
            <Select
                name="tasks"
                inputId="tasks"
                setValue={setTask}
                options={taskOptions}
            />

            <label htmlFor="due_on">Due On:</label>
            <StringInput name="due_on" id="due_on" value={dueOn} setValue={setDueOn} />

            <button>Create Chore</button>
        </>
    );
}

export default ChoreEditor;