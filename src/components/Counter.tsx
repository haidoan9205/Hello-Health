import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";

const useStyles = makeStyles({
  marginLeft20: {
    marginLeft: "20px",
  },
});

const Counter = () => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div style={{ marginTop: "20px", marginLeft: "10px" }}>
      <div>
        <Button onClick={increaseCounter} variant="outlined" color="success">
          Increase
        </Button>
        <Button onClick={resetCounter} className={classes.marginLeft20} variant="outlined" color="error">
          Reset
        </Button>
      </div>
      <br />
      <TextField disabled id="outlined" label="Counter" value={counter} />
    </div>
  );
};
export default Counter;
