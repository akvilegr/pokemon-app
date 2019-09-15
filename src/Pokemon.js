import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
      height: 50,
      paddingTop: '50%',
      backgroundSize: 150
    },
  });


export default function Pokemon(props) {

    const classes = useStyles();

    return (
        <div>
        <Card key={props.id}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.name}
            src={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              Type: <span>
                {props.type.map(type =>
                <span key={type}> {type} </span>
                )}
            </span>
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              Height: {props.height}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              Weaknesses: <span>
                {props.weaknesses.map(weakness =>
                <span key={weakness}> {weakness} </span>
                )}
            </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
);
}

