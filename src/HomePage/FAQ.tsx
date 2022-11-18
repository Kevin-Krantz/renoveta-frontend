import styled from "styled-components";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IFaq } from "../types/contenful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY || "",
});

function FAQ() {
  const [faqs, setFaqs] = useState<IFaq[]>([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function loadEntries() {
      const { items } = await client.getEntries({ content_type: "faq" });
      setFaqs(items as any);
      console.log(items);
    }
    loadEntries();
  }, []);

  const toggle = (item: any) => {
    if (selected === item) {
      return setSelected(null);
    }

    setSelected(item);
  };

  return (
    <Container>
      <h1>Vanliga frågor</h1>
      {faqs.map((faq, item) => (
        <FAQSection key={faq.sys.id}>
          <IconContainer onClick={() => toggle(item)}>
            <Icon>{selected === item ? "-" : "+"}</Icon>
          </IconContainer>
          <div>
            <H3Question>{faq.fields.title}</H3Question>
            <div>
              {selected === item ? (
                <AnswerShow>
                  {documentToReactComponents(faq.fields.text!)}
                </AnswerShow>
              ) : (
                <AnswerHidden />
              )}
            </div>
          </div>
        </FAQSection>
      ))}
      <p>Hittade du inte det du sökte? Fråga Renoveta</p>
    </Container>
  );
}

export default FAQ;

const Container = styled.div`
  display: grid;
  grid-template-columns: 600px;
  margin-left: 300px;
  margin-bottom: 50px;
  h1 {
    text-align: center;
  }
  p {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 15px;
  }

  @media screen and (max-width: 880px) {
    margin-left: 50px;
    width: 600px;
  }
`;

const FAQSection = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  align-items: center;
  border-radius: 8px;
  margin: 4px 0px;
  border: 1px solid rgb(221, 221, 221);
`;

const IconContainer = styled.div`
  display: grid;
  align-items: center;
  cursor: pointer;
  padding: 0px 24px;
  width: 50px;
  height: 50px;
  user-select: none;
`;

const Icon = styled.span`
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 80px;
  background-color: rgb(170, 170, 170);
  color: white;
  font-family: MyriadPro-Bold;
  font-size: 21px;
`;

const H3Question = styled.h3`
  margin: 16px 0px;
  padding-top: 4px;
  padding-right: 40px;

  @media screen and (max-width: 880px) {
    margin-left: 0px;
    width: 300px;
  }
`;

const AnswerHidden = styled.h3`
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s;
`;

const AnswerShow = styled.h3`
  grid-column: 1 / span 2;
  font-size: 16px;
  text-align: left;
  font-weight: lighter;

  @media screen and (max-width: 880px) {
    margin-left: 0px;
    width: 300px;
  }
`;
