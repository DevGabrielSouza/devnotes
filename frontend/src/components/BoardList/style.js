import styled from 'styled-components';

export const Container = styled.div`

    padding: 0 10px;
    height: 100%;
    flex: 0 0 320px;
    overflow-y: auto;

    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
        background-color: rgba(0,0,0,.4);
    }

    &::-webkit-scrollbar
    {
        width: 10px;
        background-color: rgba(0,0,0,.5);
    }

    &::-webkit-scrollbar-thumb
    {
        background-color: #000000;
        border: 2px solid #1E1B18;
    }

    .BoardList--item{

        
        margin: 0 auto;
        padding: 10px;
        border-radius: 5px;
        background: #fbfcff;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

        button{
            background: #1E1B18;
            border: none;
            border-radius: 20px;
        }

        header.boardList--Header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 42px;

            h2{
                font-size: 16px;
                font-weight: 500;
                padding: 0 10px;
            }

            button{
                width: 32px;
                height: 32px;
                border-radius: 18px;
                border: 0;
                cursor: pointer;
            }

        }

        ul{
            margin-top: 20px;
        }


    }

    

`;
