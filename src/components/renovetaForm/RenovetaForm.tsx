import styled from 'styled-components';
import Button from "../common/Button";
import RFForm from './RFForm';

function RenovetaForm() {
    return (
        <Wrapper>
            <Container> 
                <LeftContainer> 
                <Logo src="logo\renoveta-logo--mint-symbol-2160.png" />
                    <h1>Vad Kommer din renovering att kosta?</h1>
                    <p>
                        Med vår kalkyl får du en uppskattning på kostnaden av ditt projekt.
                        Önskar du få fler uppgifter vad som gäller?
                        <br />
                        <br />
                        Registrera dina uppgifter, och få tillgång till hela vår tjänst.
                    </p>
                    <ul>
                        <li>Prisindikation </li>
                        <li>Skräddarsytt avtal </li>
                        <li>Regel-koll</li>
                    </ul>
                        <Button primary={true} type="submit" label={"Registrera dig"} />
                </LeftContainer>
                
                <RightContainer>
                     <RFForm/>
                </RightContainer>
            </Container>
        </Wrapper>
    );
}

export default RenovetaForm;
const Wrapper = styled.div `
width: 100vw; 
height: 100vh;
display: flex;
align-content: center;
justify-content: center;

` 
const Container = styled.div`
width: 70vw;
height: 60vh;
display: grid;
grid-template-columns: 1fr 2fr;


` 
const LeftContainer = styled.div `
grid-column: 1/2;
background-color: var(--bg-secondary);
padding: 45px;
border-radius: 45px 0 0 45px;

`
const Logo = styled.img`
  position: absolute;
  width: 10%;
  top: 8px;
  left: 48px;
`

const RightContainer = styled.div `
grid-column: 2/3;
background: red;
border-radius: 0 45px 45px 0;
position: relative;

`
const ButtonContainer = styled.div `
position: absolute;
bottom: 0;
right: 0;
margin: 40px;
`