import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = themes => ({
    card: {
        // backgroundColor: '#000000',
        maxWidth: 345,
      },
      media: {
        height: 380,
        marginBottom: 4
      },
})


class NameCard extends Component{

    render(){
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./profile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h3">
                    Oliver Z. Wang
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="body">
                    Computer Science Student at NYU <br/> Aspiring Software Developer 
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions> */}
            </Card>
          );
    }
}

export default withStyles(styles)(NameCard)