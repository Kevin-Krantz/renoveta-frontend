import {useState} from 'react';
import styled from 'styled-components';
import RFStart from './RFStart';
import RFMoreInfo from './RFMoreInfo';
import RFPersonal from './RFPersonal';
import RFProperty from './RFProperty';
import RFRenovationInfo from './RFRenovationInfo';



function RFForm() {
    const [page,setPage] = useState(0);
      
    const [formData, setFormData] = useState({
            renovationType: "",
            changeAppearance: "", 
            roofType: "",
            roofMaterial: "",
            roofAngle: "",
            propertyLenght: "",
            propertyWidth: "",
            otherInfo: "",
            attachments: "",
            email: "",
            phone: "",
            name: "",
            address: "",
            propertyName: "",
            city: ""
    
        }
      )



const pageTitles = ["Start","Vad ska du renovera","Information om ditt tak", "Ytterligare Information", "Dina kontaktuppgifter"]

const displayPage = () => {
    if(page === 0) {
        return <RFStart/>
    } else if(page === 1) {
        return <RFRenovationInfo formData= {formData} setFormData = {setFormData} />
    } else if (page === 2) {
        return <RFProperty formData={formData} setFormData =  {setFormData} />
    } else if (page === 3) {
        return <RFMoreInfo formData={formData} setFormData ={setFormData} />
    } else {
        return <RFPersonal formData={formData} setFormData={setFormData}/>
    }
}

    return (
        <Container>
            <h2>{pageTitles[page]}</h2>
            <div>{displayPage()}</div>
        <ButtonContainer>
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === pageTitles.length - 1) {
       
                
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === pageTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </ButtonContainer>
        </Container>
    );
}

export default RFForm;
const Container = styled.div `
position: relative;
height: 100%;

`
const ButtonContainer = styled.div `
position: absolute;
bottom: 0;
right: 0;
margin: 40px;
`