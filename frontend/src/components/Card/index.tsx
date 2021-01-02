import React from 'react'
import { Container } from './style';

import { useDrag } from 'react-dnd';
import DropCard from '../DropCard/index';

interface CardProps{
    data: any,
    listId: number,
}

export default function Card(card: CardProps) {

    const [{ isDragging }, dragRef] = useDrag({
        item: {
            type: 'CARD',
            id: card.data.id,
            listId: card.listId,
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    }); 

    /* const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor): 
    }); */

    return (
        <>
            <Container ref={dragRef} isDragging={isDragging}>

                <header>
                    <span className="title">{card.data.title}</span>
                </header>

                <div className="content">
                    <p>{card.data.content}</p>
                </div>


            </Container>
            <DropCard cardBefore={{ id: card.data.id, order: card.data.order }} toListId={card.listId} />
        </>
    )
}
