import React from 'react'
import { Container } from './style';

import { useDrag } from 'react-dnd';

export default function Card() {

    const [{ isDragging }, dragRef] = useDrag({
        item: {
            type: 'CARD'
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    }); 

    return (
        <Container ref={dragRef} isDragging={isDragging}>

            <header>
                label
            </header>

            <div className="content">
                <p>teste</p>
            </div>

        </Container>
    )
}
