import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    minHeight: "1000px",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    marginTop: "140px",
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },

}));

export default function Contact(props) {
  const classes = useStyles();

  return (
    <div>
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${"./contact.jpg"})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={"./contact.jpg"} alt={"coding"} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Contact
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Email:  zw1400 _at_ nyu _dot_edu
            </Typography>
            <Link color="inherit" variant="h5" href="https://www.linkedin.com/in/zichuan-wang-4433bb13a/">
               LinkedIn Profile
            </Link>
            
          </div>
        </Grid>
      </Grid>
      {/* <Footer></Footer> */}
    </Paper>
    <Footer></Footer>
    </div>
  );
}

Contact.propTypes = {
  post: PropTypes.object,
};