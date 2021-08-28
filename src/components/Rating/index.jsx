import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > label': {
      fontSize: 24,
    },
  },
}));

export default function SimpleRating(props) {
  const classes = useStyles();
  return (
    <Rating
      name="controlled"
      value={props.rating}
      readOnly={props.readonly}
      onChange={(event, newValue) => {
        props.setRating(newValue);
      }}
      className={classes.root}
    />
  );
}
