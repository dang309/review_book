import React from 'react';

import CommentBoxStyle from './CommentBox.style';

import ReactTimeAgo from 'react-time-ago';
import decode from 'decode-html';

function CommentBox(props) {
  return (
    <CommentBoxStyle>
      <div className="comment">
        <div className="header">
          {props.like ? (
            <i className="fas fa-thumbs-up" />
          ) : (
            <i className="fas fa-thumbs-down" />
          )}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: props.content && decode(props.content),
          }}
        />
        <div className="footer">
          <span className="date">
            <ReactTimeAgo date={props.created_at} locale="vi-VN" />
          </span>
          <h4 className="name">{props.nickname}</h4>
        </div>
      </div>
    </CommentBoxStyle>
  );
}

export default CommentBox;
