import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(255, 0, 0, 0.2);
    height: 8px;
    opacity: ${props => props.show ? 1 : 0};

`;
