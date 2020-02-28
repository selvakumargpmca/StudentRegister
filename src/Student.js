import React, { Component } from "react";
import "./styles.css";

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.RollNo}</td>
        <td>{this.props.data.Name}</td>
        <td>{this.props.data.Degree}</td>
        <td>{this.props.data.Batch}</td>
      </tr>
    );
  }
}

class Student extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          RollNo: 1,
          Name: "Arun",
          Degree: "BE",
          Batch: "2019"
        },
        {
          RollNo: 2,
          Name: "Balu",
          Degree: "BE",
          Batch: "2019"
        },
        {
          RollNo: 3,
          Name: "Deepak",
          Degree: "BE",
          Batch: "2020"
        }
      ]
    };
  }

  componentDidMount() {
    this.txtBoxDisable(1);
  }
  btnClear() {
    document.getElementById("txtRollNo").value = null;
    document.getElementById("txtName").value = null;
    document.getElementById("txtDegree").value = null;
    document.getElementById("txtBatch").value = null;

    this.txtBoxDisable(5);
  }

  txtBoxDisable(param1) {
    if (param1 == 1) {
      // Onload
      document.getElementById("txtRollNo").disabled = true;
      document.getElementById("txtName").disabled = true;
      document.getElementById("txtDegree").disabled = true;
      document.getElementById("txtBatch").disabled = true;

      document.getElementById("btnAdd").disabled = false;
      document.getElementById("btnDel").disabled = false;
      document.getElementById("btnUpt").disabled = false;
      document.getElementById("btnClear").disabled = false;
    } else if (param1 == 2) {
      // Add
      document.getElementById("txtRollNo").disabled = false;
      document.getElementById("txtName").disabled = false;
      document.getElementById("txtDegree").disabled = false;
      document.getElementById("txtBatch").disabled = false;

      document.getElementById("btnAdd").disabled = false;
      document.getElementById("btnDel").disabled = true;
      document.getElementById("btnUpt").disabled = true;
      document.getElementById("btnClear").disabled = false;

      document.getElementById("btnDel").className = "button button2 disabled";
      document.getElementById("btnUpt").className = "button button3 disabled";

      document.getElementById("btnAdd").value = "Done";
    } else if (param1 == 3) {
      // Delete
      document.getElementById("txtRollNo").disabled = false;
      document.getElementById("txtName").disabled = true;
      document.getElementById("txtDegree").disabled = true;
      document.getElementById("txtBatch").disabled = true;

      document.getElementById("btnAdd").disabled = true;
      document.getElementById("btnDel").disabled = false;
      document.getElementById("btnUpt").disabled = true;
      document.getElementById("btnClear").disabled = false;

      document.getElementById("btnAdd").className = "button button3 disabled";
      document.getElementById("btnUpt").className = "button button3 disabled";

      document.getElementById("btnDel").value = "Done";
    } else if (param1 == 4) {
      // Update
      document.getElementById("txtRollNo").disabled = false;
      document.getElementById("txtName").disabled = false;
      document.getElementById("txtDegree").disabled = false;
      document.getElementById("txtBatch").disabled = false;

      document.getElementById("btnAdd").disabled = true;
      document.getElementById("btnDel").disabled = true;
      document.getElementById("btnUpt").disabled = false;
      document.getElementById("btnClear").disabled = false;

      document.getElementById("btnDel").className = "button button2 disabled";
      document.getElementById("btnAdd").className = "button button3 disabled";

      document.getElementById("btnUpt").value = "Done";
    } else if (param1 == 5) {
      // Cancel
      document.getElementById("txtRollNo").disabled = true;
      document.getElementById("txtName").disabled = true;
      document.getElementById("txtDegree").disabled = true;
      document.getElementById("txtBatch").disabled = true;

      document.getElementById("btnAdd").disabled = false;
      document.getElementById("btnDel").disabled = false;
      document.getElementById("btnUpt").disabled = false;
      document.getElementById("btnClear").disabled = false;

      document.getElementById("btnAdd").value = "Add";
      document.getElementById("btnUpt").value = "Update";
      document.getElementById("btnDel").value = "Delete";

      document.getElementById("btnDel").className = "button button2";
      document.getElementById("btnUpt").className = "button button3";
      document.getElementById("btnAdd").className = "button button3";
    }
  }

  btnAdd() {
    if (document.getElementById("btnAdd").value === "Add") {
      this.txtBoxDisable(2);
    } else {
      var rnoVal = document.getElementById("txtRollNo").value;
      var nameVal = document.getElementById("txtName").value;
      var degreeVal = document.getElementById("txtDegree").value;
      var batchVal = document.getElementById("txtBatch").value;

      var newData;

      newData = this.state.data;
      if (rnoVal != "" && nameVal != "" && degreeVal != "" && batchVal != "") {
        newData.push({
          RollNo: rnoVal,
          Name: nameVal,
          Degree: degreeVal,
          Batch: batchVal
        });
        this.setState({ newData });
        this.btnClear();
      } else {
        alert("All Data is mandatory");
      }
    }
  }

  btnUpdate() {
    if (document.getElementById("btnUpt").value === "Update") {
      this.txtBoxDisable(4);
    } else {
      var newData;
      newData = this.state.data;
      var rnoVal = document.getElementById("txtRollNo").value;
      var nameVal = document.getElementById("txtName").value;
      var degreeVal = document.getElementById("txtDegree").value;
      var batchVal = document.getElementById("txtBatch").value;

      if (rnoVal != "") {
        for (var i = 0; i < newData.length; i++) {
          if (rnoVal == newData[i]["RollNo"]) {
            if (nameVal !== "") {
              newData[i]["Name"] = nameVal;
            }

            if (degreeVal !== "") {
              newData[i]["Degree"] = degreeVal;
            }

            if (batchVal !== "") {
              newData[i]["Batch"] = batchVal;
            }

            break;
          }
        }
        this.setState({ newData });
        this.btnClear();
      } else {
        alert("Role Number is mandatory");
      }
    }
  }

  btnDelete() {
    if (document.getElementById("btnDel").value === "Delete") {
      this.txtBoxDisable(3);
    } else {
      var newData;
      newData = this.state.data;
      var rnoVal = document.getElementById("txtRollNo").value;
      var indexNo;
      if (rnoVal != "") {
        for (var i = 0; i < newData.length; i++) {
          if (rnoVal == newData[i]["RollNo"]) {
            indexNo = i;
            break;
          }
        }
        newData.splice(indexNo, 1);
        this.setState({ newData });
        this.btnClear();
      } else {
        alert("Role Number is Mandatory");
      }
    }
  }

  render() {
    return (
      <div>
        <table className="App">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Name</th>
              <th>Degree</th>
              <th>Batch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input id="txtRollNo" type="text" />
              </td>
              <td>
                <input id="txtName" type="text" />
              </td>
              <td>
                <input id="txtDegree" type="text" />
              </td>
              <td>
                <input id="txtBatch" type="text" />
              </td>
              <td>
                <input
                  id="btnAdd"
                  type="button"
                  value="Add"
                  onClick={e => this.btnAdd(e)}
                  class="button button3"
                />
              </td>
              <td>
                <input
                  id="btnDel"
                  type="button"
                  value="Delete"
                  onClick={e => this.btnDelete(e)}
                  class="button button2"
                />
              </td>
              <td>
                <input
                  id="btnUpt"
                  type="button"
                  value="Update"
                  onClick={e => this.btnUpdate(e)}
                  class="button button3"
                />
              </td>
              <td>
                <input
                  id="btnClear"
                  type="button"
                  value="Cancel"
                  onClick={e => this.btnClear(e)}
                  class="button button3"
                />
              </td>
            </tr>
            {this.state.data.map((person, i) => (
              <TableRow key={i} data={person} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Student;
