import { useSlateStatic } from "slate-react";
import { isImageUrl, insertImage } from "@/app/utils/customEditor";

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

export default InsertImageButton;
