import styled from 'styled-components';

export default styled.div`
  position: relative;
  .bg_img {
    width: 100%;
    height: 256px;

    overflow: hidden;

    position: relative;

    img {
      width: 100%;
      height: auto;

      filter: opacity(0.8);
    }
  }

  .search {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 99;

    .clear_btn {
      cursor: pointer;

      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .Input {
      position: relative;

      width: 60%;

      &.isOnMobile {
        width: 85%;

        .Input-text {
          font-size: 16px;
        }

        .Input-label {
          font-size: 16px;

          bottom: 0;
        }
      }
    }

    .Input-text {
      display: block;
      margin: 0;
      padding: 16px;
      color: inherit;
      width: 100%;
      font-family: inherit;
      font-size: 20px;
      font-weight: inherit;
      line-height: var(--inputLineHeight);
      border: none;
      border-radius: 0.4rem;
      outline: none;
      transition: box-shadow var(--transitionDuration);

      box-shadow: 0.2rem 0.8rem 1.6rem transparent;
    }

    .Input-text::placeholder {
      color: rgba(0, 0, 0, 0.8);
    }

    .Input-label {
      display: block;
      position: absolute;
      bottom: 20%;
      left: 0.5rem;
      color: #fff;
      font-family: inherit;
      font-size: var(--inputFontSize);
      font-weight: inherit;
      line-height: var(--inputLineHeight);
      opacity: 0;
      transform: translate3d(0, var(--labelDefaultPosY), 0) scale(1);
      transform-origin: 0 0;
      transition: opacity var(--inputTransitionDuration)
          var(--inputTransitionTF),
        transform var(--inputTransitionDuration) var(--inputTransitionTF),
        visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF),
        z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);
    }

    .Input-text:placeholder-shown + .Input-label {
      visibility: hidden;
      z-index: -1;
    }

    .Input-text:not(:placeholder-shown) + .Input-label,
    .Input-text:focus:not(:placeholder-shown) + .Input-label {
      visibility: visible;
      z-index: 1;
      opacity: 1;
      transform: translate3d(0, var(--labelTransformedPosY), 0)
        scale(var(--labelScaleFactor));
      transition: transform var(--inputTransitionDuration), visibility 0ms,
        z-index 0ms;
    }

    .search_result_box {
      background-color: #fff;

      border-radius: 8px;

      margin-top: 2px;
      padding: 8px;

      position: absolute;

      max-height: 512px;
      width: 100%;

      overflow-y: auto;

      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      display: flex;
      flex-direction: column;
      gap: 4px;

      background-color: #fafafa;

      & > span {
        padding: 8px;

        background-color: #fff;

        border-radius: 24px;

        text-align: center;

        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;
