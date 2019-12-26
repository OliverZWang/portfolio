import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/styles';
import AboutMeItems from './AboutMeItmes'
import List from '@material-ui/core/List';

const styles = themes => ({

}); 



class Bio extends Component {
    render(){
        const {classes} = this.props; 
        return (

            <div>
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>

                <Divider />

                <List className={classes.root}>
                    <AboutMeItems 
                        AvatarAlt={'Program'} 
                        AvatarSrc={'./school_avatar.jpg'}
                        Primary={'Program of Study'}
                        Line1={"Accelerated Bachelor's-Master's Program in Computer Science"}
                        Line2={"Courant Institute of Mathematical Sciences - New York University"}
                        > </AboutMeItems>
                    <AboutMeItems
                        AvatarAlt={'Language'}
                        AvatarSrc={'./language_avatar.jpg'}
                        Primary={"Languages"}
                        Line1={"English"}
                        Line2={"Chinese"}> </AboutMeItems>
                    <AboutMeItems
                        AvatarAlt={'Interest'}
                        AvatarSrc={'./interests.jpg'}
                        Primary={"When I'm Not a Programmer"}
                        Line1={"Experienced Martial Artist"}
                        Line2={"Triathlete in the making"}> </AboutMeItems>
                    <AboutMeItems
                        AvatarAlt={'Activity'}
                        AvatarSrc={'./pride.jpg'}
                        Primary={"Activities"}
                        Line1={"New York University LGBTQ+ Center"}
                        Line2={"NYU CS+Social Good Club"}> </AboutMeItems>
                </List>

        
              

            </div>
        
          );
    }
}

export default withStyles(styles)(Bio); 