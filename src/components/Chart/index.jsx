import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
  root: {
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    gap: 8,
  },

  star: {
    color: '#ffb400',
  },

  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },

  text: {
    color: 'rgba(0,0,0,.6)',
    fontSize: 20,
  },
});

function Chart(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.info}>
          <div className={classes.star_container}>
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
          </div>
          <div className={classes.text}>
            <span>{props.fiveStar}</span>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.star_container}>
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
          </div>
          <div className={classes.text}>
            <span>{props.fourStar}</span>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.star_container}>
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
          </div>
          <div className={classes.text}>
            <span>{props.threeStar}</span>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.star_container}>
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
          </div>
          <div className={classes.text}>
            <span>{props.twoStar}</span>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.star_container}>
            <StarIcon className={classes.star} />
          </div>
          <div className={classes.text}>
            <span>{props.oneStar}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
