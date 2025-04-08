import React from "react"
import PropTypes from "prop-types"
import { get } from "../api";
import FormattedDate from "./FormattedDate"

function Chores() {
  const [chores, setChores] = React.useState([]);

  React.useEffect(() => {
    get("/v1/chores").then((response) => {
      setChores(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div>
        <h2>Listing chores</h2>
        <table>
          <thead>
            <tr>
              <th width="125" align="left">
                Child
              </th>
              <th width="200" align="left">
                Task
              </th>
              <th width="75">Due on</th>
              <th width="75">Status</th>
            </tr>
          </thead>
          {
            chores.map((chore) => (
              <tr key={`chore-${chore.attributes.id}`}>
                <td>{chore.attributes.child_name}</td>
                <td>{chore.attributes.task_name}</td>
                <td>{FormattedDate(chore.attributes.due_on)}</td>
                <td>{chore.attributes.status}</td>
              </tr>
            ))
          }
        </table>
      </div>
    </React.Fragment>
  );
}

export default Chores
