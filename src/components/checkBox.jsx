import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px){
        height: 3rem;
    
    }
`
const CheckContainer = styled.div`
    width: 1.1rem;
    height: 1.1rem;
    border: solid 2px ${({ checked }) => checked ? "#41f246" : "white"};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ checked }) => checked ? "#41f246" : 'inherit'};

    &:hover{
        border: solid 2px   #41f246 ;
    }

    @media screen and (max-width: 600px){
        width: 1.5rem;
        height: 1.5rem;
    
    }
`
const CheckIcon = styled.img`
    width: 0.8rem;
    height: 0.8rem;
`
const Text = styled.p`
    color: white;
    margin-left: 1rem;
`


function CheckBox ({ text, action }) {
    const [checked, setChecked] = useState(false);

    function checkItem () {
        setChecked(prev => !prev);
        action()
    }

    return (
        <>
            <Container>
                <CheckContainer checked={ checked } onClick={ checkItem }>
                    {
                        checked &&
                        <CheckIcon src='/icons/check-icon.svg' />
                    }
                </CheckContainer>
                <Text>{ `Include ${text}` }</Text>
            </Container>
        </>
    )
}

export default CheckBox