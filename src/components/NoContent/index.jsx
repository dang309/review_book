import React from 'react';

import empty from '../../assets/img/empty.svg';

import NoContentStyle from './NoContent.style';

function NoContent(props) {
  return (
    <NoContentStyle size={props.size}>
      <div>
        <img src={empty} alt="Empty" />
      </div>
      <p>{props.text}</p>
    </NoContentStyle>
  );
}

export default NoContent;
