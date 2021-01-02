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
    const [updatedItem, setUpdatedItem] = useState(0);

    useEffect(() => {

        api.get('card-lists').then(response => {
            setLists(response.data.data);
        })

    }, []);

    function move(cardId: number, listId: number){

        api.put(`cards/${cardId}`, { card_list_id: listId }).then(response => {
            setUpdatedItem(cardId);
        })

    }

    return (
        <BoardContext.Provider value={{ lists, move, updatedItem }}>
            <Container>

                { lists.map((listItem: ListsVars, index) => (
                   <BoardList key={index} title={listItem.title} id={listItem.id} />
                )) }
                
            </Container>
        </BoardContext.Provider>
    )
}
