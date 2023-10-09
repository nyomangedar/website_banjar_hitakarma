import { useSlateStatic } from "slate-react";
import { isImageUrl, insertImage } from "@/app/utils/customEditor";
import { IconType } from "react-icons";
import { createElement } from "react";

const InsertImageButton: React.FC<{
    icon: IconType;
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
            {createElement(icon, { size: 25 })}
        </button>
    );
};

export default InsertImageButton;
