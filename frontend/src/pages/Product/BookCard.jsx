import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 240,
    width: 240,
    margin: 'auto',
  },
});

const BookCard = (props) => {
  const classes = useStyles();
  const { title, subtitle, description, imgSrc } = props;
  return (
    <Card>
      <CardMedia className={classes.media} image={imgSrc} />

      <CardContent>
        <Typography className={classes.title} variant="h6">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {subtitle}
        </Typography>
        <Box fontWeight="fontWeightBold" m={1}>
          {description}
        </Box>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
