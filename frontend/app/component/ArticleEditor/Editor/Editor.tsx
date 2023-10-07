"use client";
import { useCallback, useMemo } from "react";
import { Element } from "./Element/Element";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor, Descendant } from "slate";
import { withImages } from "@/app/utils/customEditor";
import ToolBar from "../ToolBar/ToolBar";
import { Leaf } from "./Leaf/Leaf";

const Editor: React.FC = () => {
    const editor = useMemo(
        () => withImages(withHistory(withReact(createEditor()))),
        []
    );

    const renderElement = useCallback((props) => <Element {...props} />, []);
    const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
    const initialValue: Descendant[] = useMemo(
        () =>
            JSON.parse(localStorage.getItem("content")) || [
                {
                    type: "paragraph",
                    children: [{ text: "Mulai isi bagian article berikut" }],
                },
            ],
        []
    );

    return (
        <Slate
            editor={editor}
            initialValue={initialValue}
            onChange={(value) => {
                const isAstChange = editor.operations.some(
                    (op) => op.type !== "set_selection"
                );

                if (isAstChange) {
                    const content = JSON.stringify(value);
                    localStorage.setItem("content", content);
                }
            }}
        >
            <ToolBar />
            <Editable
                style={{ padding: "5px" }}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                spellCheck
                autoFocus
            />
        </Slate>
    );
};

export default Editor;
