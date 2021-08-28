import React from 'react';

import ReviewBox from '../components/ReviewBox';
import Loading from '../components/Loading';
import NoContent from '../components/NoContent';

function ReviewContainer(props) {
  return (
    <>
      {props.reviews &&
        props.reviews.map((review) => (
          <ReviewBox key={review._id} {...review} />
        ))}
      {!props.reviews && <Loading />}
      {props.reviews && props.reviews.length === 0 && (
        <NoContent text="Chưa có review nào cả." size={256} />
      )}
    </>
  );
}

export default ReviewContainer;
