import { Editor } from "slate";
import { useSlate } from "slate-react";

const MarkButton: React.FC<{
    format: any;
    icon: string;
}> = ({ format, icon }) => {
    const editor = useSlate();
    return (
        <button
            onMouseDown={(event) => {
                event.preventDefault();
                toggleMark(editor, format);
            }}
        >
            {icon}
        </button>
    );
};

const toggleMark = (editor: any, format: any) => {
    const isActive = () => {
        const marks = Editor.marks(editor);
        return marks ? marks[format] === true : false;
    };
    if (isActive()) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
};

export default MarkButton;
