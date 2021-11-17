import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Grid, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "position", headerName: "Position", width: 200 },
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
];

const successNotify = () =>
  toast.success("Employee added successfully!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const Employee = () => {
  const [employeeDetail, setEmployeeDetail] = useState([{}]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [dataGridKey, setDataGridKey] = useState(0);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };

  const addNewEmployee = () => {
    axios
      .post(
        "https://619314fbd3ae6d0017da836f.mockapi.io/api/hellohealth/employee",
        {
          name,
          email,
          position,
        }
      )
      .then((res) => {
        if (res.status === 201) {
          console.log("respost:", res);
          successNotify();
          getEmployees();
          setDataGridKey(dataGridKey + 1);
        }
      });
  };

  const getEmployees = () =>
    axios
      .get(
        "https://619314fbd3ae6d0017da836f.mockapi.io/api/hellohealth/employee"
      )
      .then((res) => {
        setEmployeeDetail(res.data);
        console.log("employeeDetail", employeeDetail);
      })
      .then((e) => console.error(e));

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div style={{ height: 400, width: "100%", marginLeft: '10px', marginTop: '20px' }}>
      <DataGrid
        rows={employeeDetail}
        key={"dataGridKey-" + dataGridKey}
        getRowId={() => Math.random()}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />

      <Grid item xs={12} sm={3}>
        <TextField
          id="standard-basic"
          label="Name"
          margin="dense"
          variant="standard"
          onChange={handleChangeName}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          margin="dense"
          variant="standard"
          onChange={handleChangeEmail}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Position"
          margin="dense"
          variant="standard"
          onChange={handleChangePosition}
        />
        <br />
        <Button onClick={addNewEmployee} style={{marginLeft: '50px'}} variant="contained">
          Add New
        </Button>
        <ToastContainer />
      </Grid>
    </div>
  );
};
export default Employee;
