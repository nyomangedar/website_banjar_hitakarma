import { useCallback } from "react";

export const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <span className="font-bold">{children}</span>;
    }

    if (leaf.italic) {
        children = <span className="italic">{children}</span>;
    }

    if (leaf.underline) {
        children = <span className="underline">{children}</span>;
    }

    return <span {...attributes}>{children}</span>;
};
