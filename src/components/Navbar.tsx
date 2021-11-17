import React from 'react';
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

import {  Link } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {
    display:'flex',
    backgroundColor: 'rgb(52, 155, 235)'
  },
  itemNav: {
    listStyleType: 'none'
  },
  textItem: {
    textDecoration: 'none',
    color: 'black'
  }
});
const Navbar= () =>{
  const classes = useStyles();
  return (
  <div className={classes.navbar}>
    <Button className={classes.itemNav}>
      <Link className={classes.textItem} to="/">Counter</Link>
    </Button>
    <Button className={classes.itemNav}>
      <Link className={classes.textItem} to="/employee">Employee</Link>
    </Button>
  </div>
  );
}
export default Navbar;