import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 3.5rem;
    margin-top: 1rem;
    background-color: #1b1818;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
`
const Title = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #676060;
`
const StrengthContainer = styled.div`
    margin-left: auto;
    height: 100%;
    min-width: 30%;
    display: flex;
    align-items: center;
`
const PassStrength = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    margin-right: 1rem;
`
const BarsContainer = styled.div`
    height: 100%;
    width: 4rem;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Bar = styled.div`
    height: 100%;
    width: 0.6rem;
    background-color: ${({ fillCell }) => fillCell ? "#41f246" : "transparent"};
    border: solid 2px ${({ fillCell }) => fillCell ? "#41f246" : "white"};
`

function Strength ({ strength }) {

    const [strengthLevel, setStrengthLevel] = useState([false, false, false, false]);

    useEffect(() => {
        checkStrength();
    }, [strength])

    const checkStrength = () => {
        if (strength === "WEAK") {
            setStrengthLevel([true, false, false, false]);
        } else if (strength === "MEDIUM") {
            setStrengthLevel([true, true, false, false])
        } else if (strength === "STRONG") {
            setStrengthLevel([true, true, true, false])
        } else if (strength === "VERY STRONG") {
            setStrengthLevel([true, true, true, true])
        }
    }

    const barElements = strengthLevel.map((level, index) => {
        return <Bar key={ index } fillCell={ level } />
    })


    return (
        <>
            <Container>
                <Title>STRENGTH</Title>
                <StrengthContainer>
                    <PassStrength>{ strength }</PassStrength>
                    <BarsContainer>
                        { barElements }
                    </BarsContainer>
                </StrengthContainer>
            </Container>
        </>
    )
}

export default Strength