import styled from "styled-components";

type PersonalData = {
  email: string;
  phone: string;
  name: string;
  password: string;
  address: string;
  propertyName: string;
  city: string;
};

type PersonalFormProps = PersonalData & {
  updateFields: (fields: Partial<PersonalData>) => void;
};

export function PersonalInfoForm({
  email,
  phone,
  name,
  password,
  address,
  propertyName,
  city,
  updateFields,
}: PersonalFormProps) {
  return (
    <Container>
      <label>Dina kontaktuppgifter</label>
      <InputContainer>
        <InputLeft>
          <input
            className="form-input-small"
            placeholder="Mejladress"
            type="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
          <input
            className="form-input-small"
            placeholder="Telefonnummer"
            type="text"
            value={phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
          />
        </InputLeft>
        <InputRight>
          <input
            className="form-input-small"
            placeholder="Önskat lösenord"
            type="password"
            value={password}
            onChange={(e) => updateFields({ password: e.target.value })}
          />
          <input
            className="form-input-small"
            placeholder="För- och efternamn"
            type="text"
            value={name}
            onChange={(e) => updateFields({ name: e.target.value })}
          />
        </InputRight>
      </InputContainer>

      <label>Din Adress</label>
      <InputContainer>
        <InputLeft>
          <input
            className="form-input-small"
            placeholder="Adress"
            type="address"
            value={address}
            onChange={(e) => updateFields({ address: e.target.value })}
          />
          <input
            className="form-input-small"
            placeholder="Fastighetsbeteckning"
            type="text"
            value={propertyName}
            onChange={(e) => updateFields({ propertyName: e.target.value })}
          />
        </InputLeft>
        <InputRight>
          <input
            className="form-input-small"
            placeholder="Ort"
            type="text"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
          />
        </InputRight>
      </InputContainer>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 55px;
  label {
    font-weight: 900;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  .form-input-small {
    border: 3px solid;
    border-color: var(--text-secondary);
  }
  .form-input-small::placeholder {
    font-size: 12px;
    font-family: "Catamaran", sans-serif;
    font-weight: 700;
    color: var(--text-secondary);
  }
`;
export const InputLeft = styled.div`
  width: 50%;
  margin: 10px;
  .form-input-small {
    margin-top: 15px;
    padding-left: 8px;
  }
`;
export const InputRight = styled.div`
  width: 50%;
  margin: 10px 10px 10px 65px;
  .form-input-small {
    margin-top: 15px;
    padding-left: 8px;
  }
`;
