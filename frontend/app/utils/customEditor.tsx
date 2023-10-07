import { BaseEditor, Descendant } from "slate";

import { ReactEditor } from "slate-react";

type EmptyText = {
    text: string;
};

type CustomText = {
    text: string;
    bold?: boolean;
    italic?: boolean;
};

export type ImageElement = {
    type: "image";
    url: string;
    children: EmptyText[];
};

export type ParagraphElement = {
    type: "paragraph";
    align?: string;
    children: Descendant[];
};

type CustomElement = ImageElement | ParagraphElement;

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText | EmptyText;
    }
}
