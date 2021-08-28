import React, { useState, useRef, useEffect } from 'react';

import HeaderStyle from './Header.style';
import InList from '../Card/InList';

import { useDispatch, useSelector } from 'react-redux';
import { getBookByKeyword, cleanResult } from '../../reducers/bookSlice';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import cx from 'classnames';

import logo from '../../assets/logo/logo.svg';
import Contact from '../Contact';
import NoContent from '../NoContent';
import Loading from '../Loading';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [openContact, setOpenContact] = React.useState(false);
  const [isShowEmpty, setIsShowEmpty] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const searchRef = useRef(null);
  let typingTimer = useRef(null);
  const dispatch = useDispatch();
  const theme = useTheme();
  const searchBooks = useSelector((state) => state.book.searchBooks);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    searchRef.current.addEventListener('keyup', (e) => {
      clearTimeout(typingTimer.current);
      typingTimer.current = setTimeout(doneTyping, 500);
    });

    searchRef.current.addEventListener('keydown', (e) => {
      clearTimeout(typingTimer.current);
      setIsShowLoading(true);
      setIsShowEmpty(false);
    });

    function doneTyping() {
      if (searchValue.length === 0) {
        dispatch(cleanResult());
        return;
      }
      dispatch(getBookByKeyword(searchValue));

      if (searchValue.length && searchBooks.length) {
        setIsShowLoading(false);
      } else {
        setTimeout(() => {
          setIsShowEmpty(true);
          setIsShowLoading(false);
        }, 2000);
      }
    }
  }, [searchValue, dispatch, searchBooks]);

  const handleClearSearch = () => {
    setSearchValue('');
    searchRef.current.focus();
  };

  const handleClickOpenContact = () => {
    setOpenContact(true);
  };

  const isShowSearchBox = Boolean(searchValue.length);

  return (
    <HeaderStyle>
      <div className="bg_img">
        {isMobile && (
          <AppBar
            position="fixed"
            color="default"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 8,
            }}
          >
            <div style={{ width: 64 }} onClick={() => window.location.reload()}>
              <img src={logo} alt="logo" style={{ width: '100%' }} />
            </div>
            <Button
              variant="contained"
              size="small"
              onClick={handleClickOpenContact}
            >
              Liên lạc
            </Button>
            <Contact
              openContact={openContact}
              setOpenContact={setOpenContact}
            />
          </AppBar>
        )}
        <img
          src="https://images2.alphacoders.com/261/thumb-1920-26102.jpg"
          alt=""
        />
      </div>
      <div className="search">
        <div
          className={cx('Input', {
            isOnMobile: isMobile,
          })}
        >
          <input
            type="text"
            id="input"
            className="Input-text"
            placeholder="Tìm kiếm theo tên sách, tác giả"
            autoComplete="off"
            ref={searchRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <label htmlFor="input" className="Input-label">
            Tên sách, Tác giả
          </label>

          {isShowSearchBox && (
            <div className="search_result_box" isOnMobile={isMobile}>
              <span>
                Kết quả tìm kiếm: {(searchBooks && searchBooks.length) || ''}
              </span>
              {searchBooks &&
                searchBooks.map((item) => {
                  return (
                    <InList
                      key={item._id}
                      {...item}
                      keyword={searchValue}
                      isOnSearch={true}
                    />
                  );
                })}
              {isShowLoading && <Loading text="Đang tìm kiếm ..." />}
              {isShowEmpty && (
                <NoContent text="Không tìm thấy sách phù hợp" size={100} />
              )}
            </div>
          )}
        </div>
        <div className="clear_btn" onClick={handleClearSearch}>
          <HighlightOffIcon style={{ color: '#C70D3A' }} />
        </div>
      </div>
    </HeaderStyle>
  );
}

export default Header;
