import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const styles = theme => ({
    nav: {
        background: "#121212",
        // boxShadow: "none",
        marginBottom: "15px",
    },
    container: {
        textAlign: "center"
    },
    nav_item: {
        listStyleType: "none",
        float: "left",
        margin: "30px",
    },
    nav_link: {
        textTransform: "uppercase",
        fontFamily: "Helvetica, Sans-Serif",
        textDecoration: "none",
        color: "white",
        "&:hover": {
            color: "grey"
        }
    },
    wrapperUL: {
        margin: "auto",
        display: "inline-block",
        padding: "0px"
    }
})



class Header extends Component{
    render(){
        const {classes} = this.props; 
        return(
            <div>
                <AppBar className={classes.nav} position='static'>
                    <div className={classes.container}>
                        <ul className={classes.wrapperUL}>
                            <li className = {classes.nav_item} key={"About Me"}>
                                <Link className={classes.nav_link} to={`/`}>About Me</Link>
                            </li>
                            {/* <li className = {classes.nav_item} key={"Education"}>
                                <Link className={classes.nav_link} to={`/education`}>Education</Link>
                            </li> */}
                            <li className = {classes.nav_item} key={"Projects"}>
                                <Link className={classes.nav_link} to={`/projects`}>Projects</Link>
                            </li>
                            <li className = {classes.nav_item} key={"Contact"}>
                                <Link className={classes.nav_link} to={`/contact`}>Contact</Link>
                            </li>
                        </ul>

                    </div>
                </AppBar>

            </div>
        )
    }
}

export default withStyles(styles)(Header); 