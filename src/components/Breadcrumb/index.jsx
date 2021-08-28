import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function CustomBreadcrumb(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        color="inherit"
        onClick={() => history.push('/')}
        className={classes.link}
      >
        <HomeIcon className={classes.icon} />
        Trang chủ
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <BookIcon className={classes.icon} />
        {props.bookName}
      </Typography>
    </Breadcrumbs>
  );
}
