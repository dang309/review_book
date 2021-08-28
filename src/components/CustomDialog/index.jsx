import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import Editor from '../Editor';
import Rating from '../Rating';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { Box, makeStyles, Typography } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { createReview } from '../../reducers/reviewSlice';
import { getBookById } from '../../reducers/bookSlice';
import { createComment, getCommentByBookId } from '../../reducers/commentSlice';
import { TextField } from '@material-ui/core';

import ReCAPTCHA from 'react-google-recaptcha';

const useStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    border: '1px solid #c4c4c4',
    padding: '18px 14px',
    borderRadius: 4,
  },
}));

function CustomModal(props) {
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(null);
  const [gRecaptchaResponse, setGReCaptchaResponse] = useState(null);
  const [error, setError] = useState('');
  const classes = useStyles();

  const dispatch = useDispatch();

  const captchaRef = useRef(null);

  let bookId = useSelector((state) => state.book.selectedBook._id);
  let reviewId = useSelector((state) => state.review.selectedReview._id);

  const handleCloseDialog = () => {
    props.setOpenDialog(false);
  };

  const handleChangeReCaptcha = (value) => {
    setGReCaptchaResponse(value);
  };

  const handleSubmit = async () => {
    setError('');
    if (props.type === 'review') {
      if (!nickname) {
        setError('Biệt danh không được trống!');
        return;
      }
      if (!content) {
        setError('Nội dung không được trống!');
        return;
      }
      if (!rating) {
        setError('Bạn chưa chấm điểm!');
        return;
      }
      if (!gRecaptchaResponse) {
        setError('Captcha không hợp lệ!');
        return;
      }
      if (!bookId) {
        bookId = JSON.parse(localStorage.getItem('book'))._id;
      }
      if (!gRecaptchaResponse) return;
      const dataToSend = {
        nickname,
        book_id: bookId,
        content,
        rating,
        'g-recaptcha-response': gRecaptchaResponse,
      };
      await dispatch(createReview(dataToSend));
      await dispatch(getBookById(bookId));
      setContent('');
      setRating('');
      setNickname('');
      setGReCaptchaResponse(null);
      handleCloseDialog();
      return;
    }
    if (props.type === 'comment') {
      if (!nickname) {
        setError('Biệt danh không được trống!');
        return;
      }
      if (!content) {
        setError('Nội dung không được trống!');
        return;
      }
      if (!gRecaptchaResponse) {
        setError('Captcha không hợp lệ!');
        return;
      }
      if (!reviewId) {
        reviewId = JSON.parse(localStorage.getItem('review'))._id;
      }
      if (!bookId) {
        bookId = JSON.parse(localStorage.getItem('book'))._id;
      }

      if (!gRecaptchaResponse) return;
      const dataToSend = {
        nickname,
        review_id: reviewId,
        book_id: bookId,
        content,
        like: props.status === 'like',
        dislike: props.status === 'dislike',
        'g-recaptcha-response': gRecaptchaResponse,
      };
      dispatch(createComment(dataToSend));
      dispatch(getCommentByBookId(bookId));
      setContent('');
      setNickname('');
      setGReCaptchaResponse(null);
      handleCloseDialog();
      return;
    }
  };

  return (
    <Dialog
      open={props.openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="form-dialog-title"
      maxWidth="lg"
    >
      <DialogTitle id="form-dialog-title">
        <Box>
          <Typography>{props.title + ' '}</Typography>
          <Typography style={{ fontWeight: 'bold' }}>
            {props.bookName}
          </Typography>
        </Box>
        {props.type === 'comment' && (
          <div className="semi-footer">
            <Typography style={{ fontWeight: 'bold' }}>
              (Bạn đã{' '}
              {props.status === 'like' ? (
                <i className="fas fa-thumbs-up" style={{ color: '#50CB93' }} />
              ) : (
                <i
                  className="fas fa-thumbs-down"
                  style={{ color: '#FF3D68' }}
                />
              )}
              )
            </Typography>
          </div>
        )}
      </DialogTitle>
      <DialogContent className={classes.dialog_content}>
        <div className={classes.body}>
          <TextField
            variant="outlined"
            placeholder="Biệt danh"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            fullWidth
            autoFocus
          />
          {props.type === 'review' && (
            <div className={classes.rating}>
              <span style={{ color: 'rgba(0,0,0,.7)' }}>Chấm điểm:</span>
              <Rating setRating={setRating} />
            </div>
          )}
          <Editor content={content} setContent={setContent} />
          <ReCAPTCHA
            ref={captchaRef}
            size="normal"
            theme="light"
            sitekey="6Le4FxkcAAAAAF7PpJXUC8K6PVC40KVpReS9BSr1"
            onChange={handleChangeReCaptcha}
          />
        </div>
      </DialogContent>
      <DialogActions>
        {error && <Alert severity="error">{error}</Alert>}

        <Button onClick={handleCloseDialog} color="secondary">
          Hủy
        </Button>
        <Button onClick={handleSubmit} color="secondary" variant="contained">
          Đăng
        </Button>
      </DialogActions>
    </Dialog>
  );
}

CustomModal.propTypes = {
  isOpenModal: propTypes.bool,
  setIsOpenModal: propTypes.func,
  title: propTypes.string,
  status: propTypes.string,
  type: propTypes.string,
};

export default CustomModal;
