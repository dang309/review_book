import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #2d4848;

  overflow-y: auto;

  ul {
    list-style-type: none;

    margin-left: 4px;
  }

  .items-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3rem;
    justify-content: center;
    align-content: center;

    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .item {
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #2d4848;
    cursor: pointer;

    span {
      background: #ffffff;
      border-radius: 0.6rem;
      font-size: 16px;
      transition: all 0.3s ease;
    }

    &:hover {
      span {
        transform: scale(1.2);
        color: #23adad;
      }
    }

    p {
      font-size: 16px;
      color: #23adade1;
    }
  }

  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 0.6rem;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 8px;

    &__numbers,
    &__btn,
    &__dots {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      cursor: pointer;

      user-select: none;
    }

    &__dots {
      width: 2.6rem;
      height: 2.6rem;
      color: #23adade1;
      cursor: initial;
    }

    &__numbers {
      border-radius: 0.4rem;

      &:hover {
        color: #23adad;
      }

      &.active {
        color: #ffffff;
        background: #23adad;
        font-weight: 600;
        border-radius: 50%;
        padding: 8px;
        width: 16px;
        height: 16px;
      }
    }

    &__btn {
      color: #23adade1;

      &.active {
        color: #2d4848;
        pointer-events: initial;

        &:hover {
          color: #23adad;
        }
      }
    }
  }
`;
