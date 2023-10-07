import { Editor, Element, Transforms } from "slate";
import { useSlate } from "slate-react";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

const BlockButton: React.FC<{
    format: any;
    icon: string;
}> = ({ format, icon }) => {
    const editor = useSlate();
    return (
        <button
            onMouseDown={(event) => {
                event.preventDefault();
                toggleBlock(editor, format);
            }}
        >
            {icon}
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
