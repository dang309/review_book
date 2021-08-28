import styled from 'styled-components';

export default styled.div`
  border-radius: 24px;

  padding: 16px;

  display: flex;
  align-items: flex-start;
  gap: 16px;

  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  word-break: break-word;

  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
    cursor: pointer;
  }

  .thumb {
    width: 64px;
    img {
      width: 100%;
      height: auto;

      min-width: ${(props) => (props.isOnMobileSearch ? '48px' : '64px')};
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

      .name {
        font-size: ${(props) => props.isOnMobileSearch && '20px'};
      }

      .author {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    .bottom {
      display: flex;
      flex-direction: ${(props) => props.isOnMobileSearch && 'column'};
      gap: ${(props) => (props.isOnMobileSearch ? '4px' : '16px')};

      .review {
        display: flex;
        align-items: center;
        gap: 8px;

        .text {
          color: rgba(0, 0, 0, 0.6);
        }

        i {
          color: #055052;
        }
      }
      .rating {
        display: flex;
        align-items: center;
        gap: 8px;

        .icon {
          display: flex;
          align-items: center;
          gap: 4px;

          span {
            color: rgba(0, 0, 0, 0.6);
          }

          i {
            color: #ffd700;
          }
        }
      }
    }
  }
`;
