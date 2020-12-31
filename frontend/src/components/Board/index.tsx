import React from 'react'

import { Container } from './style';

import BoardList from './../BoardList/index';
import { loadLists } from '../../services/api';


const boardListItems = loadLists();

export default function Board() {
    return (
        <Container>

            { boardListItems.map((listItem, index) => (
                <BoardList key={index} title={listItem.title} cards={listItem.cards} />
            )) }
            
        </Container>
    )
}
