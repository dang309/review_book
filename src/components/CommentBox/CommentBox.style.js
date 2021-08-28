import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  width: 100%;
  .comment {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    width: 100%;

    background: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .header {
      padding: 12px;

      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      i.fa-thumbs-up {
        color: #50cb93;
      }

      i.fa-thumbs-down {
        color: #ff3f00;
      }
    }

    .content {
      padding: 12px;

      text-align: left;

      max-height: 256px;

      overflow: auto;
    }

    .footer {
      padding: 12px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .date {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;
