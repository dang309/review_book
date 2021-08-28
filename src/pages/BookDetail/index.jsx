/*
 * BookDetail
 *
 *
 *
 */

import React, { useState, useEffect, useContext } from 'react';
import Breadcrumb from '../../components/Breadcrumb';

import Standalone from '../../components/Card/Standalone';
import ReviewContainer from '../../container/ReviewContainer';

import AppBar from '@material-ui/core/AppBar';

import { useSelector, useDispatch } from 'react-redux';
import { getBookById } from '../../reducers/bookSlice';
import { useLocation, useHistory } from 'react-router-dom';

import BookDetailStyle from './BookDetail.style';

import { DeviceContext } from '../../App';
import cx from 'classnames';

import logo from '../../assets/logo/logo.svg';
import { getReviewByBookId } from '../../reducers/reviewSlice';

import { Helmet } from 'react-helmet';
import Pagination from '../../components/Pagination';

export default function HomePage() {
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  const location = useLocation();
  let bookDetail = useSelector((state) => state.book.selectedBook);
  let reviews = useSelector((state) => state.review.reviews);
  const totalReviews = useSelector((state) => state.review.paging.total);
  const isMobile = useContext(DeviceContext);
  const history = useHistory();

  if (!bookDetail || Object.keys(bookDetail).length === 0) {
    bookDetail = JSON.parse(localStorage.getItem('book'));
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    dispatch(getBookById(searchParams.get('id')));
    dispatch(
      getReviewByBookId({ book_id: searchParams.get('id'), page: activePage }),
    );
  }, [dispatch, location.search, activePage]);

  return (
    <BookDetailStyle>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{bookDetail.name}</title>
        <link rel="icon" type="image/jpg" href={bookDetail.featured_img} />
      </Helmet>
      <AppBar
        position="fixed"
        color="default"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 8,
        }}
      >
        <div style={{ width: '80%', textAlign: 'center' }}>
          <div
            style={{ width: isMobile ? 64 : 96, cursor: 'pointer' }}
            onClick={() => history.push('/')}
          >
            <img src={logo} alt="logo" style={{ width: '100%' }} />
          </div>
        </div>
      </AppBar>
      {!isMobile && (
        <div className="book_detail" isOnMobile={isMobile}>
          <div className="review_list">
            <Breadcrumb bookName={bookDetail.name} />
            {totalReviews > 0 && (
              <Pagination
                totalItem={totalReviews}
                numberOfItemPerPage={8}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            )}
            <ReviewContainer reviews={reviews} />
            {totalReviews > 0 && (
              <Pagination
                totalItem={totalReviews}
                numberOfItemPerPage={8}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            )}
          </div>
          <div className="card_standalone">
            <Standalone reviews={reviews} {...bookDetail} />
          </div>
        </div>
      )}

      {isMobile && (
        <div
          className={cx('book_detail', {
            isOnMobile: isMobile,
          })}
        >
          <Breadcrumb bookName={bookDetail.name} />
          <Standalone reviews={reviews} {...bookDetail} />
          {totalReviews > 0 && (
            <Pagination
              totalItem={totalReviews}
              numberOfItemPerPage={8}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
          <ReviewContainer reviews={reviews} />
          {totalReviews > 0 && (
            <Pagination
              totalItem={totalReviews}
              numberOfItemPerPage={8}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
        </div>
      )}
    </BookDetailStyle>
  );
}
