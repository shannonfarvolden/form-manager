import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

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
  }
};

const Navbar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />

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

          <Link className={classes.link} to="/page">
            <Button className={classes.menuButton} color="primary">
              <Typography>Pages</Typography>
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
