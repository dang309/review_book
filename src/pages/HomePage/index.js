/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect, useContext } from 'react';

import HomePageStyle from './HomePage.style';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';
import BookContainer from '../../container/BookContainer';

import { useSelector, useDispatch } from 'react-redux';
import { getBookForPerPage } from '../../reducers/bookSlice';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button, makeStyles } from '@material-ui/core';
import logo from '../../assets/logo/logo.svg';

import Contact from '../../components/Contact';

import { DeviceContext } from '../../App';

import cx from 'classnames';

import LineStyleIcon from '@material-ui/icons/LineStyle';
import RateReviewIcon from '@material-ui/icons/RateReview';
import StarIcon from '@material-ui/icons/Star';

const uesStyles = makeStyles(() => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));

export default function HomePage() {
  const [activePage, setActivePage] = useState(1);
  const [currentTab, setCurrentTab] = useState(0);
  const [openContact, setOpenContact] = React.useState(false);
  const dispatch = useDispatch();
  const classes = uesStyles();
  const isMobile = useContext(DeviceContext);

  const handleClickOpenContact = () => {
    setOpenContact(true);
  };

  const totalBooks = useSelector((state) => state.book.paging.total);

  const books = useSelector((state) => state.book.books);

  const handleChangeCurrentTab = (event, newValue) => {
    switch (newValue) {
      case 0:
        dispatch(getBookForPerPage({ page: activePage, sortBy: 'all' }));
        break;
      case 1:
        dispatch(
          getBookForPerPage({ page: activePage, sortBy: 'total_rating' }),
        );
        break;
      case 2:
        dispatch(
          getBookForPerPage({ page: activePage, sortBy: 'average_rating' }),
        );
        break;
      default:
        return;
    }
    setCurrentTab(newValue);
  };

  useEffect(() => {
    dispatch(getBookForPerPage({ page: activePage, sortBy: 'all' }));
  }, [activePage, dispatch]);

  return (
    <HomePageStyle>
      <Header />

      {!isMobile && (
        <Paper elevation={4} className={classes.paper}>
          <div style={{ width: 96, cursor: 'pointer' }}>
            <img src={logo} alt="logo" style={{ width: '100%' }} />
          </div>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            centered
            value={currentTab}
            onChange={handleChangeCurrentTab}
          >
            <Tab
              label="Tất cả"
              icon={<LineStyleIcon style={{ color: '#865439' }} />}
            />
            <Tab
              label="Sách có nhiều review"
              icon={<RateReviewIcon style={{ color: '#297F87' }} />}
            />
            <Tab
              label="Sách được yêu thích"
              icon={<StarIcon style={{ color: '#ffb400' }} />}
            />
          </Tabs>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpenContact}
          >
            Liên lạc
          </Button>

          <Contact openContact={openContact} setOpenContact={setOpenContact} />
        </Paper>
      )}

      <div className="book_list_wrapper">
        <div
          className={cx('book_list', {
            isOnMobile: isMobile,
          })}
        >
          <Pagination
            totalItem={totalBooks}
            numberOfItemPerPage={8}
            activePage={activePage}
            setActivePage={setActivePage}
          />
          <BookContainer currentTab={currentTab} books={books} />
          <Pagination
            totalItem={totalBooks}
            numberOfItemPerPage={8}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </div>
    </HomePageStyle>
  );
}
