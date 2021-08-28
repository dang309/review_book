import React, { useState, useRef } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';

import { Box, Button, TextField, Snackbar } from '@material-ui/core';

import ContactService from '../../api/contactAPI';

import ReCAPTCHA from 'react-google-recaptcha';

function Contact(props) {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [gRecaptchaResponse, setGReCaptchaResponse] = useState(null);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);
  const [error, setError] = useState('');
  const captchaRef = useRef(null);

  const handleCloseContact = () => {
    props.setOpenContact(false);
  };

  const handleCloseSnakeBar = () => {
    setIsOpenSnackBar(false);
  };

  const handleChangeReCaptcha = (value) => {
    setGReCaptchaResponse(value);
  };

  const handleSubmit = async () => {
    setError('');
    if (!email) {
      setError('Email không được trống!');
      return;
    }
    if (!/.+@.+\..+/.test(email)) {
      setError('Email không hợp lệ!');
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
    const dataToSend = {
      email,
      content,
      'g-recaptcha-response': gRecaptchaResponse,
    };

    await ContactService.createContact(dataToSend);
    setIsOpenSnackBar(true);
    handleCloseContact();
    setEmail('');
    setContent('');
    setGReCaptchaResponse('');
  };

  return (
    <>
      <Dialog
        open={props.openContact}
        onClose={handleCloseContact}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Liên lạc</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: '#000' }}>
            Xin chào!😊 Bạn có thể đặt bất cứ câu hỏi, thắc mắc hay yêu cầu cho
            mình. Mình sẽ cố gắng phản hổi nhanh nhất có thể.⚡ Xin cám ơn!😍
          </DialogContentText>
          <Box mb={2}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Địa chỉ email"
              type="email"
              fullWidth
              color="secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <TextField
              margin="dense"
              label="Nội dung"
              type="text"
              fullWidth
              color="secondary"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              autoComplete="off"
            />
          </Box>
          <ReCAPTCHA
            ref={captchaRef}
            size="normal"
            theme="light"
            sitekey="6Le4FxkcAAAAAF7PpJXUC8K6PVC40KVpReS9BSr1"
            onChange={handleChangeReCaptcha}
          />
        </DialogContent>
        <DialogActions>
          {error && <Alert severity="error">{error}</Alert>}
          <Button onClick={handleCloseContact} color="secondary">
            Hủy
          </Button>
          <Button onClick={handleSubmit} color="secondary" variant="contained">
            Gửi
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={isOpenSnackBar}
        autoHideDuration={4000}
        onClose={handleCloseSnakeBar}
      >
        <Alert onClose={handleCloseSnakeBar} severity="success">
          Gửi thành công
        </Alert>
      </Snackbar>
    </>
  );
}

export default Contact;
