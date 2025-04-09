import React from "react";
import { useState } from "react";
import { get } from "../api";
import ChoreItem from "./ChoreItem";

function Chores() {
  const [chores, setChores] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

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
            chores.map((chore) => (<ChoreItem chore={chore} choreId={chore.id} />))
          }
          <button onClick={() => setIsEditing(true)}>Create New Chore</button>
          <br />
          {isEditing && (
            <>
              <ChoreEditor />
              &nbsp;&nbsp;
              <a onClick={() => setIsEditing(false)}>Cancel</a>
            </>
          )}
        </table>
      </div>
    </React.Fragment>
  );
}

export default Chores
