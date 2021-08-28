import React, { useContext } from 'react';

import propTypes from 'prop-types';
import StandaloneStyle from './Standalone.style';

import CustomDialog from '../../CustomDialog';
import StarIcon from '@material-ui/icons/Star';

import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';

import { DeviceContext } from '../../../App';

import Chart from '../../Chart';

function Standalone(props) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const isMobile = useContext(DeviceContext);

  const handleOpenModal = () => {
    setOpenDialog(!openDialog);
  };

  const oneStar = props.reviews.filter((review) => review.rating === 1);
  const twoStar = props.reviews.filter((review) => review.rating === 2);
  const threeStar = props.reviews.filter((review) => review.rating === 3);
  const fourStar = props.reviews.filter((review) => review.rating === 4);
  const fiveStar = props.reviews.filter((review) => review.rating === 5);

  return (
    <StandaloneStyle isOnMobile={isMobile}>
      <div className="thumb">
        <img src={props.featured_img} alt="" />
      </div>
      <div className="info">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <span className="author">{props.author}</span>
        </div>
        <div className="bottom">
          <div className="rating">
            <span className="icon">
              <span>{parseFloat(props.average_rating, 10).toFixed(1)}</span>
              <StarIcon style={{ color: '#ffb400', fontSize: 28 }} />
            </span>
            <span className="amount">
              {parseInt(props.total_rating, 10)} reviews
            </span>
          </div>
        </div>
        <Chart
          oneStar={oneStar.length}
          twoStar={twoStar.length}
          threeStar={threeStar.length}
          fourStar={fourStar.length}
          fiveStar={fiveStar.length}
        />
      </div>

      <Button
        variant="contained"
        size="large"
        onClick={handleOpenModal}
        startIcon={<CreateIcon />}
        style={{ color: '#fff', backgroundColor: '#5d8233', borderRadius: 24 }}
      >
        Viết review
      </Button>

      <CustomDialog
        type="review"
        title="Review"
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        bookName={props.name}
      />
    </StandaloneStyle>
  );
}

Standalone.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  author: propTypes.string,
  average_rating: propTypes.number,
  featured_img: propTypes.string,
  total_rating: propTypes.number,
};

export default Standalone;
