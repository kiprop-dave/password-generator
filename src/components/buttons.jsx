import styled from 'styled-components';

const ActionButton = styled.button`
    border: none;
    width: 100%;
    height: 3.5rem;
    margin-top: 1rem;
    background-color: #41f246;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1b1818;

    &:hover{
        background-color: inherit;
        border: solid 1px #41f246;
        color: #41f246;

        img{
            filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
        }
    }
`
const Text = styled.p`
    font-size: 1.2rem;
`
const ArrowIcon = styled.img`
    width: 1.2rem;
    height: 1rem;
    margin-left: 2rem;
`

function Button ({ action }) {

    return (
        <>
            <ActionButton onClick={ () => action() }>
                <Text>GENERATE</Text>
                <ArrowIcon src='/icons/right-arrow.svg' />
            </ActionButton>
        </>
    )
}

export default Button