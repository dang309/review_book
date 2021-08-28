import React from 'react';

import propTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';

function CustomPagination(props) {
  const { totalItem, numberOfItemPerPage } = props;

  const numberPagesShow =
    totalItem &&
    numberOfItemPerPage &&
    Math.ceil(totalItem / numberOfItemPerPage);

  const handleChangePage = (e, value) => {
    props.setActivePage(value);
  };

  return (
    <Pagination
      count={numberPagesShow}
      variant="outlined"
      color="secondary"
      page={props.activePage}
      onChange={handleChangePage}
    />
  );
}

CustomPagination.propTypes = {
  totalItem: propTypes.number,
  numberOfItemPerPage: propTypes.number,
  activePage: propTypes.number,
  setActivePage: propTypes.func,
};

export default CustomPagination;
