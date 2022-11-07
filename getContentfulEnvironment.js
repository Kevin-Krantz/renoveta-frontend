//skapat client till att hämta content från contenful
import contentfulManagement from "contentful-typescript-codegen";

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};

// console.log("process", process.env);
// export default function () {
//   const client = contentfulManagement.createClient({
//     accessToken: "LHKZjOWJdq1rRmZEdTIRsJG-vfukKGVV2sUfWjYt9zo",
//   });

//   return client.getSpace("dd2qfg19yu3v");
// }
