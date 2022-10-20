import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: #2a2525;
    height: 3rem;
    margin-top: 2rem;
    padding: 0.3rem 1rem 0.3rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #e2b9b9;

    &:hover{
        color: #ecdede;
    }
`
const Text = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    /* color: #e2b9b9; */
`
const CopyIcon = styled.img`
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
`
const Copied = styled.p`
    font-size: 0.875rem;
    color: #41f246;
`
let first = false;

function Password ({ password }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!first) {
            first = true;
            return;
        }
        setTimeout(() => {
            setCopied(false);
        }, 1000)
    }, [copied])

    function copyPassword () {
        if (password.length > 0) {
            navigator.clipboard.writeText(password);
            setCopied(true);
        }
    }


    return (
        <>
            <Container>
                <Text>{ password }</Text>
                {
                    !copied ?
                        <CopyIcon src='/icons/copy-icon.svg' alt='copy text' onClick={ copyPassword } /> :
                        <Copied>COPIED!</Copied>
                }
            </Container>
        </>
    )
}

export default Password