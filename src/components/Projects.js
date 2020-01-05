import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ProjectCard from './ProjectCard';
import Container from '@material-ui/core/Container';
import Footer from './Footer';






const styles = theme => ({
    title: {
        marginTop: "15px"
    }

})



class Projects extends Component{
    render(){
        
        const {classes} = this.props; 
        return(
            <Container>
                <Typography className={classes.title} variant="h4"  gutterBottom>Projects</Typography>
                <Divider/> 
                <Divider/> 
                <ProjectCard className={classes.card}
                title="LightShare"
                date="September 2019 - December 2019"
                description={"LightShare is lightweight, plug and play solution for individuals or groups looking to start their own content writing and publishing platform. At its core, LightShare is a blogging tool that can be simply downloaded, configured and deployed without having to worry about overhead and scaling. "}
                image='./lightshare.png'
                link='https://github.com/nyu-software-engineering/fall-2019-lightshare'></ProjectCard>
                <Footer></Footer>
            </Container>
            
            
            
        )
    }

}

export default withStyles(styles)(Projects); 