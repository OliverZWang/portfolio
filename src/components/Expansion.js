import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const styles = themes => ({
    root: {
        width: '100%',
        marginTop: "10px"
      },

      inline: {
        display: 'inline',
      },
    
}); 

class Expansion extends Component{

    render(){
        const {classes} = this.props; 
        return(
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h5" component="h4">{this.props.heading}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary={
                                <React.Fragment>
                                {this.props.text.map(line=>
                                    <Typography
                                    component="span"
                                    variant="body1"
                                    className={classes.inline}
                                    color="textPrimary"
                                    >
                                    
                                        {line}<br/>
                                    </Typography>

                                    )}
                                

                                </React.Fragment>
                            }
                            />
                        </ListItem>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                

            </div>

        ); 
    }
}

export default withStyles(styles)(Expansion);

Expansion.defaultProps={
    heading: "Default Heading",
    text: ["Line1", "Line2"]

}