import React from 'react'
import { Container } from './style';

import { MdAdd } from 'react-icons/md';
import Card from '../Card';

interface BoardListProps{
    title: string,
    cards: any,
    id: number,
}


export default function BoardList(props: BoardListProps) {

    const cardList: [] = props.cards;

    return (
        <Container>

            <div className="BoardList--item">

                <header>
                    <h2>{props.title}</h2>
                    <button type="button">
                        <MdAdd size={24} color="#fff" />
                    </button>
                </header>

                <ul>

                    { cardList.map((card, index)  => (
                        <Card key={index} data={card} listId={props.id} />
                    )) }

                </ul>

            </div>

        </Container>
    )
}
