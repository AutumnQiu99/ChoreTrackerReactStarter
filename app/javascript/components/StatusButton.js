import { React, useState } from "react"
import PropTypes from "prop-types"

function StatusButton({ choreId, status }) {
    const [thisStatus, setThisStatus] = useState(status);

    function toggleStatus() {
        put(`/v1/chores/${choreId}/toggle_status`).then((response) => {
            const newStatus = thisStatus === "Pending" ? "Completed" : "Pending";
            setThisStatus(newStatus);
        });
    }

    return <button onClick={toggleStatus}>{thisStatus}</button>;
}