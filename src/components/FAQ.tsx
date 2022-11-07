import { createClient } from "contentful";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY || "",
});

function FAQ() {
  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    async function loadEntries() {
      const { items } = await client.getEntries({ content_type: "faq" });
      setFaqs(items as any);
      console.log(items);
    }
    loadEntries();
  }, []);

  return (
    <div>
      {faqs.map((faq) => (
        <div key={faq.sys.id}>
          <h3>{faq.fields.title}</h3>
          <h3>{documentToReactComponents(faq.fields.text)}</h3>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
