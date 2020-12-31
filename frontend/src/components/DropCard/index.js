import React, { useContext } from 'react'
import { Container } from './style';

import { useDrag, useDrop } from 'react-dnd';
import BoardContext from '../Board/context';


export default function DropCard(props) {

    const { move } = useContext(BoardContext);

    const [, dropRef] = useDrop({
        accept: 'CARD',
        // drop instead of hover to execute only when drop
        drop(item, monitor){

            if( item == undefined){
                return;
            }

            move(item.id, props.cardBefore, item.listId, props.toListId);
            item.id = props.cardBefore;
        }
    });

    return (
        <Container ref={dropRef}>
        </Container>
    )
}
