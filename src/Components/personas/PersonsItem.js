import React from "react";

export default function PersonasItem({ persons }) {


  return <React.Fragment>

            <tbody>
              <tr>
              <td>{persons.id}</td>
              <td>{persons.name}</td>
              </tr>
            </tbody>

        </React.Fragment>

}