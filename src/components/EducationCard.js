import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const styles = themes => ({
    card: {
        marginTop: "30px",
        display: 'flex',
        },
    cardDetails: {
        // flex: 1,
        marginLeft: "10px"
        },
    cardMedia: {
        width: 300,
        height: 140
        },

    CardContent: {
        // backgroundColor: "grey",
    }
    
}); 

class EducationCard extends Component{

    render(){

        const {classes} = this.props; 

        return(
            // <Grid item xs={12} sm={12} md={12}> 
                <CardActionArea component="a" href={this.props.Link}>
                    <Card className={classes.card}>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image={this.props.Image} title={this.props.Title} />
                        </Hidden>
                        <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography align="left" component="h2" variant="h5">
                                {this.props.Title}
                            </Typography>
                            <Typography align="left" variant="body1" color="textSecondary">
                                {this.props.Date}
                            </Typography>
                            <Typography align="left" variant="body1" color="textSecondary">
                                {this.props.Location}
                            </Typography>
                            <Typography aligh="left" variant="body1" paragraph>
                                {this.props.Description}
                            </Typography>

                        </CardContent>
                        </div>
                    </Card>
                </CardActionArea>
            // </Grid>
            
        )
    }

}

EducationCard.defaultProps={
    Image: "https://images-na.ssl-images-amazon.com/images/I/31MUdiMAEtL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg",
    Title: "Default Title",
    Date: "Default Date",
    Description: "Default Description",
    Link: "https://www.ef.edu/academy/campuses/new-york/"

}

export default withStyles(styles)(EducationCard);