
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ProjectCard.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 250,
    },
    media: {
      height: 150,
    },
  });

const ProjectCard = (props) => {
    const classes = useStyles();
    return (
        <div className="project__card">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.img}
        //   title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.head}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <a href={props.link} className="project__link">view </a>
            
        </Button>
        
      </CardActions>
    </Card>
        </div>
    )
}


export default ProjectCard