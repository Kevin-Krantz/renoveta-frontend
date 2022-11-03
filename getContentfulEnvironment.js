import { createClient } from "contentful";
import contentfulManagement from "contentful-typescript-codegen";

export default function () {
  //  createClient({
  //     space: "dd2qfg19yu3v",
  //     accessToken: "LHKZjOWJdq1rRmZEdTIRsJG-vfukKGVV2sUfWjYt9zo",
  //   });

  const client = contentfulManagement.createClient({
    accessToken: "LHKZjOWJdq1rRmZEdTIRsJG-vfukKGVV2sUfWjYt9zo",
  });

  return client.getSpace("dd2qfg19yu3v");
}
