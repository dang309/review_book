import React, { useContext } from 'react';

import propTypes from 'prop-types';
import InListStyle from './InList.style';
import { useHistory } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import { getBookById } from '../../../reducers/bookSlice';
import { useDispatch } from 'react-redux';
import Highlighter from 'react-highlight-words';
import { getCommentByBookId } from '../../../reducers/commentSlice';

import { DeviceContext } from '../../../App';

function InList(props) {
  let history = useHistory();
  let dispatch = useDispatch();
  const isMobile = useContext(DeviceContext);

  const handleGoToBookDetail = () => {
    console.log(props);
    history.push(`/book?id=${props._id}`);
    dispatch(getBookById(props._id));
    dispatch(getCommentByBookId(props._id));
    localStorage.setItem('book', JSON.stringify(props));
  };
  return (
    <InListStyle
      onClick={handleGoToBookDetail}
      isOnMobileSearch={isMobile && props.isOnSearch}
    >
      <div className="thumb">
        <img src={props.featured_img} alt={props.name} />
      </div>
      <div className="info">
        <div className="top">
          <h2 className="name">
            <Highlighter
              searchWords={[props.keyword]}
              autoEscape={true}
              textToHighlight={props.name}
            />
          </h2>
          <span className="author">
            <Highlighter
              searchWords={[props.keyword]}
              autoEscape={true}
              textToHighlight={props.author}
            />
          </span>
        </div>
        <div className="bottom">
          <div className="review">
            <span className="icon">
              <i className="fas fa-pen-alt" />
            </span>
            <span className="text">{props.total_reviews}</span>
          </div>
          <div className="rating">
            <span className="icon">
              <span>{parseFloat(props.average_rating, 10).toFixed(1)}</span>
              <StarIcon style={{ color: '#ffb400' }} />
              <span>({props.total_rating})</span>
            </span>
          </div>
        </div>
      </div>
    </InListStyle>
  );
}

InList.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  author: propTypes.string,
  average_rating: propTypes.number,
  featured_img: propTypes.string,
  total_rating: propTypes.number,
};

export default InList;
