import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const res = await client.getEntries({ content_type: "faq" });

  return {
    props: {
      faqs: res.items,
    },
  };
}

function FAQ({ res }: any) {
  console.log(res);

  return (
    <div>
      {/* {faqs.map((faq: any) => (
        <div key={faq.sys.id}>
          <div>
            <h3>{faq.fields.title}</h3>
            <h3>{faq.fields.text}</h3>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default FAQ;
