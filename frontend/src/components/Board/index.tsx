import React from 'react'

import { Container } from './style';

import BoardList from './../BoardList/index';

export default function Board() {
    return (
        <Container>
            <BoardList/>
            <BoardList/>
            <BoardList/>
        </Container>
    )
}
