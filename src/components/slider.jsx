import styled from 'styled-components';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css"

const Container = styled.div`
    width: 100%;
    height: 4rem;
`
const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.p`
    font-size: 0.875rem;
    color: white;
`
const Length = styled.p`
    font-weight: 600;
    font-size: 1.5rem;
    color: #41f246;
`
const SliderContainer = styled.div`
    width: 100%;
    height: 2.4rem;
    display: flex;
    align-items: center;
    /* border: solid 1px yellow; */
`


function SliderComponent ({ length, change }) {

    return (
        <>
            <Container>
                <Header>
                    <Title>Character Length</Title>
                    <Length>{ length }</Length>
                </Header>
                <SliderContainer>

                    <Slider
                        min={ 0 }
                        max={ 25 }
                        value={ length }
                        onChange={ (val) => change(val) }
                        railStyle={ { height: 4, background: "#1b1818" } }
                        handleStyle={ {
                            height: 20,
                            width: 20,
                            marginLeft: 0,
                            marginTop: -8,
                            backgroundColor: 'white',
                            border: 0,
                            cursor: 'pointer',
                            onmouseenter: {
                                backgroundColor: "blue"
                            }
                        } }
                        trackStyle={ { background: "#41f246" } }
                    />
                </SliderContainer>
            </Container>
        </>
    )
}

export default SliderComponent