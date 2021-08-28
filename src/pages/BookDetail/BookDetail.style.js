import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .book_detail {
    display: flex;
    justify-content: space-between;
    gap: 16px;

    width: 80%;
    height: 100vh;

    margin: 112px 0 24px 0;

    &.isOnMobile {
      display: flex;
      flex-direction: column;
      gap: 8px;

      width: 90%;

      margin: 80px 0 24px 0;
    }

    .review_list {
      display: flex;
      flex-direction: column;
      gap: 8px;

      width: 100%;
    }
  }
`;
