import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-top: 20px;
  div {
    width: ${(props) => props.size + 'px' || '256px'};

    img {
      width: 100%;
      height: auto;
    }
  }

  p {
    color: rgba(0, 0, 0, 0.7);
  }
`;
