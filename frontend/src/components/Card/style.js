import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #1E1B18;
  color: #f2f2f2;
  padding: 15px;
  margin: 10px 0px;
  border-radius: 5px;
  cursor: grab;
  transition: all .2s;

  header{
      color: #989898;
      font-size: 18px;
      margin-bottom: 10px;
  }

  p{
      font-weight: 500;
      line-height: 20px;
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: transparent;
    cursor: grabbing;

    *{
      opacity: 0;
    }

  `}

`;
