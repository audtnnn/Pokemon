import React from 'react';
import styled from 'styled-components'
import { changeType } from '@/store/board'
import { useDispatch, useSelector } from 'react-redux'

const BoardTypeBlock = styled.div`
    text-align:center; margin-top:30px; 
    button { margin:20px; width:100px; height:40px; 
        &.on { background:green; color:#fff; }
    }
`

const BoardType = () => {
    const dispatch = useDispatch()
    const type = useSelector(state=>state.boards.type)
    const title = ["notice", "review"]
    
    return (
        <BoardTypeBlock>
            {
                title.map((item, index)=>(
                    <button key={index} onClick={ ()=>dispatch(changeType(item)) } className={ type==item && "on" }>{item}</button>
                ))
            }
        </BoardTypeBlock>
    );
};

export default BoardType;