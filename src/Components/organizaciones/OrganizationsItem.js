import React from "react";

export default function OganizationsItem({ organizations }) {


  return <React.Fragment>

            <tbody>
              <tr>
              <td>{organizations.id}</td>
              <td>{organizations.name}</td>
              </tr>
            </tbody>

        </React.Fragment>

}