import React from 'react'
import { Container } from './style';

import { useDrag, useDrop } from 'react-dnd';
import DropCard from '../DropCard';

interface CardProps{
    data: any;
}

export default function Card(data: CardProps) {

    const [{ isDragging }, dragRef] = useDrag({
        item: {
            type: 'CARD',
            id: data.data.id,
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
                    {data.data.content}
                </header>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis, laborum, minima quia voluptate dignissimos nemo distinctio</p>
                </div>


            </Container>
            <DropCard/>
        </>
    )
}
