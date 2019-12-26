import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/styles';

const styles = themes => ({

      inline: {
        display: 'inline',
      },
      large: {
        width: 70,
        height: 70,
      },
      listItemText: {
          marginLeft: '10px',
      }
}); 



class AboutMeItems extends Component {
    render(){
        const {classes} = this.props; 
        return (



              
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar className={classes.large} alt={this.props.AvatarAlt} src={this.props.AvatarSrc} />
                </ListItemAvatar>
                <ListItemText
                className={classes.listItemText}
                primary={this.props.Primary}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {this.props.Line1} <br/> {this.props.Line2}
                    </Typography>

                    </React.Fragment>
                }
                />
                </ListItem>


        
          );
    }
}

AboutMeItems.defaultProps={
    AvatarAlt: "Avatar Alt",
    AvatarSrc: "./profile.jpg",
    Primary: "Primary Text",
    Line1: "First Line", 
    Line2: "Second Line"

}

export default withStyles(styles)(AboutMeItems); 