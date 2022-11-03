import { createClient } from "contentful";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: "dd2qfg19yu3v",
  accessToken: "LHKZjOWJdq1rRmZEdTIRsJG-vfukKGVV2sUfWjYt9zo",
});

function FAQ() {
  const [faqs, setFaqs] = useState<any>([]);

  useEffect(() => {
    // setFaqs();
    async function loadEntries() {
      const { items } = await client.getEntries({ content_type: "faq" });
      setFaqs(items as any);
      console.log(items);
    }
    loadEntries();
  }, []);

  return (
    <div>
      {/* @ts-disable */}
      {faqs.map((faq: any) => (
        <div key={faq.sys.id}>
          <h3>{faq.fields.title}</h3>
          <h3>{documentToReactComponents(faq.fields.text)}</h3>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
