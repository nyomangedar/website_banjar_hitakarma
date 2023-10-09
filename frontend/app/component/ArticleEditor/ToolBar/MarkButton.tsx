import { createElement } from "react";
import { IconType } from "react-icons";
import { Editor } from "slate";
import { useSlate } from "slate-react";

const MarkButton: React.FC<{
    format: any;
    icon: IconType;
}> = ({ format, icon }) => {
    const editor = useSlate();
    const active = isMarkActive(editor, format);
    const classNameInactive = "bg-slate-100 p-3 rounded sticky top-28";
    const classNameActive = "bg-black p-3 rounded";
    const iconInactive = { size: 25 };
    const iconActive = { size: 25, color: "white" };
    return (
        <button
            className={active ? classNameActive : classNameInactive}
            onMouseDown={(event) => {
                event.preventDefault();
                toggleMark(editor, format);
            }}
        >
            {active
                ? createElement(icon, iconActive)
                : createElement(icon, iconInactive)}
        </button>
    );
};

const toggleMark = (editor: any, format: any) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
};

const isMarkActive = (editor: any, format: any) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

export default MarkButton;
