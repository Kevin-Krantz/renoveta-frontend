import styled from 'styled-components';
import Button from './common/Button';

function WhatisRenoveta() {
    return (
        <Container>
            <MainContainer>
            <HeadingText>Vad är Renoveta?</HeadingText>
            <ContentContainer>
                <LeftContainer> 
                <img
                src='/images/renovetaReviews.png'
                />
                </LeftContainer>
                <RightContainer>
                    <TextContainer> 
                        <p>När vi köper en bostad så tillkommer underhåll och renovering - exteriört som 
                            interiört. Renoveringar kan bli en krånglig, tidskrävande och kostsam historia om 
                            det inte går rätt till. Det vill vi förändra.

                            <br>
                            </br>
                            <br></br>
                            Genom att erbjuda en digital tjänst som sammanställer allt du behöver veta - helt
                            anpassad efter just din renovering. Vi ger dig snabba svar på funderingarna om 
                            kostnad, bygglov och avtal samt tar fram förslag på hur du kan renovera mer 
                            hållbart och ekonomiskt. 
                            Vår erfarenhet är din trygghet.</p>
                            
                    </TextContainer>
                    <Button 
                   label={"Jag vill veta mer"}
                   primary = {true}
                   type = "submit"
                    />
                    </RightContainer>
            </ContentContainer>
        </MainContainer>
        </Container>
    );
}

export default WhatisRenoveta;




const Container = styled.div`
heigh: 100vh;`

const MainContainer = styled.div `
padding: 20px 0 20px 0 ;
`

const HeadingText = styled.h2 `
text-align: center;
font-size: 30px;
font-weight: 900;
color: var(--text-secondary);
`

const ContentContainer = styled.div `
position: relative;
display: flex;
padding: 40px;
width: 100vw;
height: 80vh;
position: relative;

` 

const LeftContainer = styled.div `
position: absolute;

width: 50vw;
img {
    width: 45vw;
    margin-left: 10vw;
}

`

const RightContainer = styled.div `
right: 0;
position: absolute;
float: right;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
width: 55vw;
background-color: #FBEDEA;
height: 48vh;
border-radius: 500px 0 0 500px;

` 

const TextContainer = styled.div `
display: flex;
align-self: center;
text-align: left;
padding-left: 7vw;

p{
    font-size: 16px;
    width: 35vw;
    font-weight: 700;
    color: var(--text-secondary);
    margin-top: 10px;
}



`