import { Editor, Element, Transforms } from "slate";
import { useSlate } from "slate-react";
import { IconType } from "react-icons";
import { createElement } from "react";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

const BlockButton: React.FC<{
    format: any;
    icon: IconType;
}> = ({ format, icon }) => {
    const editor = useSlate();
    const active = isBlockActive(editor, format);
    const classNameInactive = "bg-slate-100 p-3 rounded sticky top-28";
    const classNameActive = "bg-black p-3 rounded";
    const iconInactive = { size: 25 };
    const iconActive = { size: 25, color: "white" };
    return (
        <button
            className={active ? classNameActive : classNameInactive}
            onMouseDown={(event) => {
                event.preventDefault();
                toggleBlock(editor, format);
            }}
        >
            {active
                ? createElement(icon, iconActive)
                : createElement(icon, iconInactive)}
        </button>
    );
};

const toggleBlock = (editor: any, format: any) => {
    const isActive = isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
    );
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
        match: (n) =>
            !Editor.isEditor(n) &&
            Element.isElement(n) &&
            LIST_TYPES.includes(n.type) &&
            !TEXT_ALIGN_TYPES.includes(format),
        split: true,
    });
    let newProperties: Partial<Element>;
    if (TEXT_ALIGN_TYPES.includes(format)) {
        newProperties = {
            align: isActive ? undefined : format,
        };
    } else {
        newProperties = {
            type: isActive ? "paragraph" : isList ? "list-item" : format,
        };
    }
    Transforms.setNodes<Element>(editor, newProperties);
    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};

const isBlockActive = (
    editor: any,
    format: any,
    blocktype: string = "type"
) => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: (n) =>
                !Editor.isEditor(n) &&
                Element.isElement(n) &&
                n[blocktype] === format,
        })
    );

    return !!match;
};

export default BlockButton;
