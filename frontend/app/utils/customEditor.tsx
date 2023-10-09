import { BaseEditor, Descendant, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import isUrl from "is-url";
import imageExtensions from "image-extensions";

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

export type ListItemElement = { type: "list-item"; children: Descendant[] };

export type BulletedListElement = {
    type: "bulleted-list";
    align?: string;
    children: Descendant[];
};

type CustomElement =
    | ImageElement
    | ParagraphElement
    | ListItemElement
    | BulletedListElement;

export const withImages = (editor: any) => {
    const { insertData, isVoid } = editor;

    editor.isVoid = (element: any) => {
        return element.type === "image" ? true : isVoid(element);
    };

    editor.insertData = (data: any) => {
        const text = data.getData("text/plain");
        const { files } = data;

        if (files && files.length > 0) {
            for (const file of files) {
                const reader = new FileReader();
                const [mime] = file.type.split("/");

                if (mime === "image") {
                    reader.addEventListener("load", () => {
                        const url = reader.result;
                        insertImage(editor, url);
                    });

                    reader.readAsDataURL(file);
                }
            }
        } else if (isImageUrl(text)) {
            insertImage(editor, text);
        } else {
            insertData(data);
        }
    };

    return editor;
};

export const insertImage = (editor: any, url: string) => {
    const text = { text: "" };
    const image: ImageElement = { type: "image", url, children: [text] };
    Transforms.insertNodes(editor, image);
};

export const isImageUrl = (url: string) => {
    if (!url) return false;
    if (!isUrl(url)) return false;
    const ext = new URL(url).pathname.split(".").pop();
    return imageExtensions.includes(ext);
};

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText | EmptyText;
    }
}
