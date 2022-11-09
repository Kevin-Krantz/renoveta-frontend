import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IFaqFields {
  /** Title */
  title?: string | undefined;

  /** Text */
  text?: Document | undefined;
}

/** Question and Answer section */

export interface IFaq extends Entry<IFaqFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "faq";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "faq";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";