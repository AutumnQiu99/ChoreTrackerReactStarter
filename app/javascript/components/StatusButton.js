import { React, useState } from "react"
import PropTypes from "prop-types"

function StatusButton({ choreId, status }) {
    const [thisStatus, setThisStatus] = useState(status);

    return <button>{thisStatus}</button>;
}