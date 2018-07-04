import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return [<a href="/api/logout">Logout</a>];
    }
  }
  render() {
    const { classes } = this.props;

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
            {this.renderContent()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}
export default withStyles(styles)(connect(mapStateToProps)(Navbar));
