import React, { useEffect, useState } from 'react'
import produce from 'immer';

import { Container } from './style';

import BoardList from './../BoardList/index';
import api from '../../services/api';

import BoardContext from './context';

interface ListsVars{
    id: number,
    title: string,
    user_id: number,
}


export default function Board() {

    const [lists, setLists] = useState([]);

    useEffect(() => {

        api.get('card-lists').then(response => {
            setLists(response.data.data);
        })

    }, []);

    function move(from: number, to: number, listId: number, toListId: number){

        /*
        // Percorre lists e retorna o Id da lista, onde (where) o id é igual ao listId
        let listIndex: number = lists.map(function(e) { return e.id; }).indexOf(listId);
        let toListIndex: number = lists.map(function(e) { return e.id; }).indexOf(toListId);
        //let toListIndex: number = lists.map(function(e) { return e.id; }).indexOf(to);

        const draggedItem = lists[listIndex];
        const toDraggedItem = lists[toListIndex];

        const listCards = draggedItem.cards;

        const cardIndex = (Object.values(listCards)).map(function(e) { return e.id; }).indexOf(from);
        const toCardIndex = ((Object.values(toDraggedItem.cards)).map(function(e) { return e.id; }).indexOf(to) + 1);

        setLists( produce(lists, draft => {
            let draggedCard = draft[listIndex].cards[cardIndex];
            draft[listIndex].cards.splice(cardIndex, 1);
            draft[toListIndex].cards.splice(toCardIndex, 0, draggedCard);
        }) )

        */

    }

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>

                { lists.map((listItem: ListsVars, index) => (
                   <BoardList key={index} title={listItem.title} id={listItem.id} />
                )) }
                
            </Container>
        </BoardContext.Provider>
    )
}
