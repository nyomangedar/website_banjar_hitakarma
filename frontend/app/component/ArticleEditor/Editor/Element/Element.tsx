"use client";
import { useCallback } from "react";
import { Transforms } from "slate";
import {
    ReactEditor,
    useFocused,
    useSelected,
    useSlateStatic,
} from "slate-react";

export const Element = ({ attributes, children, element }) => {
    const style = { textAlign: element.align };
    switch (element.type) {
        case "bulleted-list":
            return (
                <ul style={style} {...attributes}>
                    {children}
                </ul>
            );
        case "heading-one":
            return (
                <h1 style={style} {...attributes}>
                    {children}
                </h1>
            );
        case "heading-two":
            return (
                <h2 style={style} {...attributes}>
                    {children}
                </h2>
            );
        case "list-item":
            return (
                <li style={style} {...attributes}>
                    {children}
                </li>
            );
        case "numbered-list":
            return (
                <ol style={style} {...attributes}>
                    {children}
                </ol>
            );
        case "image":
            return (
                <Image {...attributes} children={children} element={element} />
            );
        default:
            return (
                <p style={style} {...attributes}>
                    {children}
                </p>
            );
    }
};

const Image: React.FC<{
    attributes: any;
    children: any;
    element: any;
}> = ({ attributes, children, element }) => {
    const editor = useSlateStatic();
    const path = ReactEditor.findPath(editor, element);

    const selected = useSelected();
    const focused = useFocused();
    return (
        <div {...attributes}>
            {children}
            <div
                contentEditable={false}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                <img
                    src={element.url}
                    style={{
                        display: "block",
                        maxWidth: "100%",
                        maxHeight: "20em",
                    }}
                />
                <button
                    onClick={() => Transforms.removeNodes(editor, { at: path })}
                >
                    delete
                </button>
            </div>
        </div>
    );
};
