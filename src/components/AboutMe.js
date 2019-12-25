import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import NameCard from './NameCard'; 


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


    // updatePictureButton:{
    //     marginTop: "10px",
    //     background: '#2E3B55',
    //     color: 'white',
    //     '&:hover': {
    //         background: '#586481',
    //     },
    // },


})

class AboutMe extends Component{
    render(){
        const {classes} = this.props; 
        return(

            <Container className={classes.container}>
                
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={4}> <NameCard></NameCard> </Grid>
                </Grid>
            
            </Container>
            
            
        )
    }

}

export default withStyles(styles)(AboutMe); 