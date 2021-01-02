import React, { useState, useEffect, useContext } from 'react'
import { Container } from './style';
import api from '../../services/api';

import BoardContext from '../Board/context';

import { MdAdd } from 'react-icons/md';
import Card from '../Card';

interface BoardListProps{
    title: string,
    id: number,
}




export default function BoardList(props: BoardListProps) {

    const { updatedItem, move } : any  = useContext(BoardContext);
    const [cards, setCards] = useState([]);

    useEffect(() => {

        api.get(`cards/?cardList=${props.id}`).then(response => {
            setCards(response.data.data);
        })

        console.log(updatedItem);

    }, [updatedItem]);



    return (
        <Container>

            <div className="BoardList--item">

                <header className="boardList--Header">
                    <h2>{props.title}</h2>
                    <button type="button">
                        <MdAdd size={24} color="#fff" />
                    </button>
                </header>

                <ul>

                    { cards.map((card, index)  => (
                        <Card key={index} data={card} listId={props.id} />
                    )) }

                </ul>

            </div>

        </Container>
    )
}
