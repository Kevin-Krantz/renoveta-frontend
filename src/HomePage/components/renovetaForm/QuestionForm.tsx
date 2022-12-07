import styled from "styled-components";

type QuestionData = {
  anyQuestions: string;
};

type QuestionFormProps = QuestionData & {
  updateFields: (fields: Partial<QuestionData>) => void;
};

export function QuestionForm({
  anyQuestions,
  updateFields,
}: QuestionFormProps) {
  return (
    <Container>
      <label>Har du några frågor eller övriga funderingar?</label>
      <input
        className="form-input"
        type="text"
        value={anyQuestions}
        onChange={(e) => updateFields({ anyQuestions: e.target.value })}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 75%;
  position: relative;
  font-size: 18px;
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  label {
    font-weight: 900;
  }
  .form-input {
    height: 180px;
  }
`;
