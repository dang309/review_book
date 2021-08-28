import styled from 'styled-components';

export default styled.div`
  width: 100%;

    blockquote{
    font-size: 20px;
    width:60%;
    margin:50px auto;
    font-family: inherit;
    font-style:italic;
    color: #555555;
    padding:1.2em 30px 1.2em 75px;
    border-left:8px solid #78C0A8 ;
    line-height:1.6;
    position: relative;
    background:#EDEDED;
  }

  blockquote::before{
    font-family:Arial;
    content: "\201C";
    color:#78C0A8;
    font-size:4em;
    position: absolute;
    left: 10px;
    top:-10px;
  }

  blockquote::after{
    content: '';
  }

  .review {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 24px;

    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    .rating {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      padding: 8px;

      display: flex;
      justify-content: space-between;
    }

    .content {
      padding: 16px;
    }

    .footer {
      padding: 16px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .name {
        font-style: italic;
        font-weight: bold;
      }

      .date {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;
