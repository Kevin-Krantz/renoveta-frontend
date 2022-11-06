import { x } from 'joi';
import styled from 'styled-components'; 
 

function Review() {
    return (
        <MainContainer>
            <HeadingText>Vad säger våra kunder</HeadingText>
            <ContentContainer>
                <LeftContainer> 
                <img
                src='/images/renovetaReviews.png'
                />
                </LeftContainer>
                <RightContainer>
                    <StarContainer> 
                        <img src='/images/star.png'/>
                        <img src='/images/star.png'/>
                        <img src='/images/star.png'/>
                        <img src='/images/star.png'/>
                        <img src='/images/star.png'/>

                    </StarContainer>
                    <TextContainer> 
                        <p>"Utan Renoveta hade jag aldrig haft koll på vad som gäller för min renovering - John"</p>
                    </TextContainer>
                </RightContainer>
            </ContentContainer>
        </MainContainer>
    );
}

export default Review;

const MainContainer = styled.div `
height: 100vh;
padding: 20px 0 20px 0 ;
`

const HeadingText = styled.h2 `
text-align: center;
font-size: 40px;
font-weight: 900;
color: var(--text-secondary);
`

const ContentContainer = styled.div `
display: flex; 
flex-direction: row;
padding: 40px;
width: 100vw;
height: 80vh;
position: relative;

` 

const LeftContainer = styled.div `
width: 50vw;

`

const RightContainer = styled.div `

display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
width: 50vw;
background-color: #FBEDEA;
height: 50vh;
border-radius: 500px 0 0 500px;
margin: 15vh 0 0 0;

` 

const StarContainer = styled.div `
display: flex;
align-self: center;
img {
    width: 35px;
}

` 
const TextContainer = styled.div `
display: flex;
align-self: center;
text-align: center;

p{
    font-size: 25px;
    width: 35vw;
    font-weight: 700;
    color: var(--text-secondary);
    margin-top: 10px;
}


`