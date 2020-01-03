import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import NameCard from './NameCard'; 
import Bio from './Bio';
import Skills from './Skills'
import Education from './Education'




const styles = theme => ({

    pic: {
        width: "100%", 
    },

    box: {
        justifyContent: 'space-between'
    },

    container: {
        marginTop: "20px",

    },


})



class AboutMe extends Component{
    render(){
        
        const {classes} = this.props; 
        return(

            <Container className={classes.container}>
                
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={4}> <NameCard></NameCard> </Grid>
                    <Grid item xs={12} sm={12} md={8}> <Bio></Bio> </Grid>
                </Grid>

            <Skills></Skills>
            <Education></Education>

            </Container>
            
            
        )
    }

}

export default withStyles(styles)(AboutMe); 