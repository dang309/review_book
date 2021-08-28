import React, { useState, useEffect, useContext } from 'react';

import propTypes from 'prop-types';
import decode from 'decode-html';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ChatIcon from '@material-ui/icons/Chat';

import SimpleRating from '../Rating';
import CommentContainer from '../../container/CommentContainer';
import CustomDialog from '../CustomDialog';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import parse from 'html-react-parser';

import { useDispatch, useSelector } from 'react-redux';
import { getReviewById } from '../../reducers/reviewSlice';
import { getCommentByBookId } from '../../reducers/commentSlice';

import ReactTimeAgo from 'react-time-ago';

import { DeviceContext } from '../../App';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  header: {
    padding: '4px 8px',
  },
  content: {
    padding: '4px 8px 8px 8px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,

    overflow: 'auto',

    wordBreak: 'break-word',

    '& blockquote': {
      fontSize: '16px',
      width: '60%',
      fontFamily: 'inherit',
      fontStyle: 'italic',
      color: '#555555',
      borderLeft: '4px solid #cccccc',
      lineHeight: '1.6',
      position: 'relative',
      background: '#f2f3f4',

      margin: '0 0 0 24px',
      padding: '4px 0 4px 16px',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  footer: {
    padding: 0,

    display: 'flex',
    justifyContent: 'space-between',

    '& > button': {
      width: '100%',

      margin: '0px !important',
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function ReviewBox(props) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [status, setStatus] = useState('');
  const classes = useStyles();
  const isMobile = useContext(DeviceContext);

  let bookId = useSelector((state) => state.book.selectedBook._id);
  let comments = useSelector((state) => state.comment.comments).filter(
    (item) => item.review_id === props._id,
  );

  if (!comments.length) {
    comments = JSON.parse(localStorage.getItem('comments')).filter(
      (item) => item.review_id === props._id,
    );
  }

  let likes = comments.filter((comment) => comment.like);
  let dislikes = comments.filter((comment) => comment.dislike);

  const dispatch = useDispatch();

  const handleOpenModal = (_status) => {
    localStorage.setItem('review', JSON.stringify(props));
    dispatch(getReviewById(props._id));
    setStatus(() => _status);
    setOpenDialog(true);
  };

  useEffect(() => {
    dispatch(getCommentByBookId(bookId));
  }, [dispatch, bookId]);

  const handleOpenComment = () => {
    if (!bookId) {
      bookId = JSON.parse(localStorage.getItem('book'))._id;
    }
    dispatch(getReviewById(props._id));
    dispatch(getCommentByBookId(bookId));
    setIsOpenComment(!isOpenComment);
  };

  return (
    <>
      <Card className={classes.root} variant="outlined" size="small">
        <CardHeader
          className={classes.header}
          title={
            <Typography
              variant="h5"
              component="h5"
              style={{ fontWeight: 'bold' }}
            >
              {props.nickname}
            </Typography>
          }
          subheader={<SimpleRating rating={props.rating} readonly />}
        />
        <CardContent
          className={classes.content}
          style={{ maxHeight: isMobile ? 360 : 512 }}
        >
          <Chip
            size="small"
            variant="outlined"
            label={<ReactTimeAgo date={props.created_at} locale="vi-VN" />}
          />
          {props.content && parse(decode(props.content))}
        </CardContent>
        <CardActions className={classes.footer}>
          <Button
            style={{ color: '#50CB93' }}
            endIcon={<ThumbUpAltIcon />}
            onClick={() => handleOpenModal('like')}
            variant="outlined"
          >
            <Typography>{likes && likes.length}</Typography>
          </Button>
          <Button
            style={{ color: '#FF3D68' }}
            endIcon={<ThumbDownAltIcon />}
            onClick={() => handleOpenModal('dislike')}
            variant="outlined"
          >
            <Typography>{dislikes && dislikes.length}</Typography>
          </Button>
          <Button
            style={{ color: '#0A043C' }}
            endIcon={<ChatIcon />}
            onClick={handleOpenComment}
            variant="outlined"
          >
            <Typography>{comments && comments.length}</Typography>
          </Button>
          <CustomDialog
            title="Bình luận"
            type="comment"
            status={status}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        </CardActions>
      </Card>

      {isOpenComment && (
        <CommentContainer reviewId={props._id} comments={comments} />
      )}
    </>
  );
}

ReviewBox.propTypes = {
  nickname: propTypes.string,
  created_at: propTypes.string,
  content: propTypes.string,
  rating: propTypes.number,
};

export default ReviewBox;
