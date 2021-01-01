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
                    {card.data.content}
                </header>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis, laborum, minima quia voluptate dignissimos nemo distinctio</p>
                </div>


            </Container>
            <DropCard cardBefore={card.data.id} toListId={card.listId} />
        </>
    )
}
