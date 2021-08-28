import styled from 'styled-components';

export default styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  min-width: 256px;

  .thumb {
    width: ${(props) => (props.isOnMobile ? '80px' : '128px')};
    img {
      width: 100%;
      height: auto;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .top {
      display: flex;
      flex-direction: column;
      gap: 8px;

      text-align: center;

      .name {
        font-size: ${(props) => props.isOnMobile && '20px'};
      }

      .author {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
      gap: 8px;
      .rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        .icon {
          display: flex;
          align-items: center;
          gap: 4px;
          span {
            color: rgba(0, 0, 0, 0.7);

            font-size: 32px;
          }
        }
      }

      .amount {
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;
