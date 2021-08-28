import styled from 'styled-components';

export default styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  padding: 16px;

  width: 1024px;

  background-color: #ffffff;

  .title {
    text-align: center;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    padding-bottom: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    h2 {
      color: #3e2c41;
    }

    button {
      border: none;
      outline: none;
      background-color: transparent;
    }

    i {
      font-size: 24px;

      cursor: pointer;

      color: #f8485e;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding-top: 16px;
    padding-bottom: 16px;

    input,
    .public-DraftStyleDefault-block,
    .public-DraftStyleDefault-ltr {
      outline: none;

      padding: 16px;

      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 24px;

      cursor: auto;
    }

    .editor {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 16px;

      padding: 16px;

      height: 50vh;
      overflow: auto;

      cursor: auto;
    }
  }

  .rating {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 24px;
    margin-bottom: 16px;

    h4 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 8px;
      padding-bottom: 8px;
    }
  }

  .semi-footer {
    i {
      font-size: 20px;

      &.fa-thumbs-up {
        color: #50cb93;
      }

      &.fa-thumbs-down {
        color: #ff3f00;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;
    button {
      position: relative;
      display: inline-block;
      cursor: pointer;
      outline: none;
      border: 0;
      vertical-align: middle;
      text-decoration: none;
      font-size: inherit;
      font-family: inherit;
      &.save_btn {
        font-weight: 600;
        color: #382b22;
        text-transform: uppercase;
        padding: 1.25em 2em;
        background: #fff0f0;
        border: 2px solid #b18597;
        border-radius: 0.75em;
        transform-style: preserve-3d;
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
          background 150ms cubic-bezier(0, 0, 0.58, 1);
        &::before {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #f9c4d2;
          border-radius: inherit;
          box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
          transform: translate3d(0, 0.75em, -1em);
          transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
            box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        &:hover {
          background: #ffe9e9;
          transform: translate(0, 0.25em);
          &::before {
            box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
            transform: translate3d(0, 0.5em, -1em);
          }
        }
        &:active {
          background: #ffe9e9;
          transform: translate(0em, 0.75em);
          &::before {
            box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
            transform: translate3d(0, 0, -1em);
          }
        }
      }
    }
  }
`;
