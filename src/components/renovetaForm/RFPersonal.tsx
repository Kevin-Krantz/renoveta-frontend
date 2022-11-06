import styled from "styled-components";
import Input from "../common/Input";

function RFPersonal({formData, setFormData}:any) {



    return (
        <FormContainer>
            <h3>9. Dina kontaktuppgifter</h3>
            <Input
                className="input"
                value={formData.email}
                name="email"
                type="text"
                onChange={(event) => setFormData({...FormData, email: event.target.value})}
            />

        </FormContainer>
    );
}

export default RFPersonal;

const FormContainer = styled.div `
display: flex;
justify-content: center;

`