import styled from 'styled-components';

export default styled.div`
  .book_list_wrapper {
    display: flex;
    justify-content: center;
    .book_list {
      width: 50%;

      margin: 16px 0;

      display: flex;
      flex-direction: column;
      gap: 8px;

      &.isOnMobile {
        width: 100%;

        padding: 0 8px;
        margin: 8px 0 8px 0;
      }
    }
  }
`;
