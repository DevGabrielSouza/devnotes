import React from 'react'
import { Container } from './style';

import { MdAdd } from 'react-icons/md';
import Card from '../Card';

export default function BoardList() {
    return (
        <Container>

            <header>
                <h2>Título da lista</h2>
                <button type="button">
                    <MdAdd size={24} color="#fff" />
                </button>
            </header>

            <ul>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ul>
        </Container>
    )
}
