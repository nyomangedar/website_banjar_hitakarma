import { Transforms } from "slate";
import { useSlateStatic } from "slate-react";
import { ImageElement } from "@/app/utils/customEditor";
import isUrl from "is-url";
import imageExtensions from "image-extensions";

const InsertImageButton: React.FC<{
    icon: string;
}> = ({ icon }) => {
    const editor = useSlateStatic();
    return (
        <button
            onMouseDown={(e) => {
                e.preventDefault();
                const url = window.prompt("Enter the url");
                if (url && !isImageUrl(url)) {
                    alert("URL is not an image");
                    return;
                }
                url && insertImage(editor, url);
            }}
        >
            {icon}
        </button>
    );
};

const insertImage = (editor: any, url: string) => {
    const text = { text: "" };
    const image: ImageElement = { type: "image", url, children: [text] };
    Transforms.insertNodes(editor, image);
};

const isImageUrl = (url) => {
    if (!url) return false;
    if (!isUrl(url)) return false;
    const ext = new URL(url).pathname.split(".").pop();
    return imageExtensions.includes(ext);
};

export default InsertImageButton;
