import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "../Form";
import HomeContainer from "../../containers/Home";

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
  }
};

const Navbar = (props) => {
  const { classes } = props;
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            />
            <Link to="/">Home</Link>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Broadridge
            </Typography>
            <Button color="inherit">
              <Link to="/form">Forms</Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Route path="/form" exact component={Form} />
        <Route path="/" exact component={HomeContainer} />        
      </div>
    </Router>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
