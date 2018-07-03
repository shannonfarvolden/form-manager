import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none"
  },
  logoIcon: {
    height: "25px",
    margin: "20px"
  }
};

const Navbar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link to="/">
            <img src={logo} className={classes.logoIcon} alt="logo" />
          </Link>

          <Link className={classes.link} to="/">
            <Button className={classes.menuButton} color="primary">
              <Typography>Home</Typography>
            </Button>
          </Link>

          <Link className={classes.link} to="/form">
            <Button className={classes.menuButton} color="primary">
              <Typography>Forms</Typography>
            </Button>
          </Link>


        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
