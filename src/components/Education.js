import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import EducationCard from './EducationCard';
import Expension from './Expansion'

const styles = themes => ({
    paper:{
        color: 'black',
        marginBottom: '4px',
        marginTop: '40px',
        position: 'relative',
        backgroundColor: 'white',
    },


}); 


class Education extends Component{
    constructor(props) {
		super(props)
		
		this.state = {
			courses: [
                "Agile Software Development",
                "Data Structures",
                "Algorithms",
                "Operating Systems",
                "Computer Systems Organization",
                "Parallel Computing", 
                "Database Design and Implementation",
                "Web Development and Programming",
                "Theory of Probability",
                "Linear Algebra",
                "Discrete Mathematics",
                "Multivariable Calculus",

            ]
		}
	}

    render(){
        const {classes} = this.props; 
        return(
            <Paper elevation={0} className={classes.paper}>
                <Typography variant="h4"  gutterBottom>Education</Typography>
                <Divider/> 
                {/* One Devider wouldn't show!  */}
                <Divider/>

                <EducationCard
                    Image="./nyu_logo.jpg"
                    Title="New York Univeristy"
                    Date="May 2017 - December 2021"
                    Description="Accelerated Bachelor's-Master's program in Computer Science. "
                    Link="https://www.nyu.edu/"
                    ></EducationCard>
                    
                <Expension
                heading="Coursework"
                text={this.state.courses}></Expension>
                

                <EducationCard
                    Image="./efa.png"
                    Title="EF Academy"
                    Date="May 2017 - December 2021"
                    Description="Accelerated Bachelor's-Master's program in Computer Science. "
                    Link="https://www.ef.edu/academy/campuses/new-york/"
                    ></EducationCard>
                
                



            </Paper>
        )
    }

}

export default withStyles(styles)(Education);