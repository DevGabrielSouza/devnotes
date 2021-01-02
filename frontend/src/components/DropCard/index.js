import React, { useContext, useState, useEffect } from 'react'
import { Container } from './style';

import { useDrop } from 'react-dnd';
import BoardContext from '../Board/context';


export default function DropCard(props) {

    const { move } = useContext(BoardContext);

    const [show, setShow] = useState(false);

    useEffect(() => {

        setShow(true);

    }, [() => move]);

    const [, dropRef] = useDrop({
        accept: 'CARD',
        // drop instead of hover to execute only when drop
        hover(item, monitor){
            //monitor.isOver() ? setShow(true) : setShow(false);
        },
        drop(item, monitor){
            move(item.id, props.toListId); 
        }
    });

    return (
        <Container show={show} ref={dropRef}/>
    )
}
