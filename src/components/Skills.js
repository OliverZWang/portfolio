import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = themes => ({
    paper:{
        color: 'black',
        marginBottom: '4px',
        marginTop: '15px',
        position: 'relative',
        backgroundColor: 'white',
    },

    title: {
        marginTop: "10px",
    },

    gridContainer: {
        marginTop: "10px",
        // marginLeft: "10px",
        // marginRight: "10px"
    }
}); 

class Skills extends Component{
    constructor(props){
        super(props); 
        this.state={
            skills: ["Agile Software Development", "Object Oriented Programming", "Web Programming and Development", "Database Design and Implementation", "Java Programming", "Python Programming", "JavaScript Programming", "C Programming"],
        }
    }

    render(){

        const {classes} = this.props; 

        return(
            <Paper elevation={0} className={classes.paper}>
                <Typography variant="h4"  gutterBottom>Skills</Typography>
                <Divider />



                <Grid className={classes.gridContainer} container spacing={6}>

                    {this.state.skills.map(skill=>
                        <Grid item xs={12} sm={6} md={3}>
                                <Card>
                                    <CardContent>
                            <Typography variant="body1">{skill}</Typography>
                                    </CardContent>
                                </Card>
                        </Grid>
                    )}
 
                </Grid>
            </Paper>

        );
    }

}

export default withStyles(styles)(Skills);