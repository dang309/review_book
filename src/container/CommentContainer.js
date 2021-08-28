import React, { useContext } from 'react';

import CommentBox from '../components/CommentBox';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core';

import { DeviceContext } from '../App';

import Loading from '../components/Loading';
import NoContent from '../components/NoContent';

const useStyles = makeStyles((theme) => ({
  timeline_root: {
    margin: 0,
    padding: 0,

    '& > li::before': {
      content: 'none',
    },
  },
  timeline_content: {
    paddingRight: 0,

    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
}));

function CommentContainer(props) {
  const isMobile = useContext(DeviceContext);
  const classes = useStyles();
  return (
    <>
      {!isMobile &&
        props.comments &&
        props.comments.map((comment) => {
          return (
            <Timeline
              key={comment.id}
              align={comment.like ? 'right' : 'left'}
              style={{ margin: 0, padding: 0 }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <CommentBox {...comment} />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          );
        })}

      {isMobile && props.comments.length > 0 && (
        <Timeline align="left" className={classes.timeline_root}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.timeline_content}>
              {props.comments &&
                props.comments.map((comment) => {
                  return <CommentBox key={comment.id} {...comment} />;
                })}
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      )}

      {!props.comments && <Loading />}
      {props.comments && props.comments.length === 0 && (
        <Timeline align="left" className={classes.timeline_root}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.timeline_content}>
              <NoContent text="Chưa có bình luận nào cả." size={148} />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      )}
    </>
  );
}

export default CommentContainer;
