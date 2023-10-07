import MarkButton from "./MarkButton";
import BlockButton from "./BlockButton";
import InsertImageButton from "./InsertImageButton";

const ToolBar: React.FC = () => {
    return (
        <div className="flex gap-5">
            <MarkButton format="bold" icon="format_bold" />
            <MarkButton format="italic" icon="format_italic" />
            <MarkButton format="underline" icon="format_underlined" />
            <BlockButton format="heading-one" icon="looks_one" />
            <BlockButton format="heading-two" icon="looks_two" />
            <BlockButton format="numbered-list" icon="format_list_numbered" />
            <BlockButton format="bulleted-list" icon="format_list_bulleted" />
            <BlockButton format="left" icon="format_align_left" />
            <BlockButton format="center" icon="format_align_center" />
            <BlockButton format="right" icon="format_align_right" />
            <BlockButton format="justify" icon="format_align_justify" />
            <InsertImageButton icon="insert_image" />
        </div>
    );
};
