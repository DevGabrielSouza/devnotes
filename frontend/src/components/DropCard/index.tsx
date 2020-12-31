import React from 'react'
import { Container } from './style';

import { useDrag, useDrop } from 'react-dnd';

export default function DropCard() {


    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor){
            console.log(item);
        }
    });

    return (
        <Container ref={dropRef}>
        </Container>
    )
}
