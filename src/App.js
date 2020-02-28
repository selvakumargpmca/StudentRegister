import React, { Component } from "react";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                {/* <h1>Student Register</h1> */}
                <h1>Web Application</h1>
              </td>
              <td align="right">
                <h1>
                  {new Date().toLocaleDateString()}{" "}
                  {new Date().toLocaleTimeString()}
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  //setInterval(tick,1000)
}
export default App;
