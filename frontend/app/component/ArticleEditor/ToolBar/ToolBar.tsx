import MarkButton from "./MarkButton";
import BlockButton from "./BlockButton";
import InsertImageButton from "./InsertImageButton";
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaHeading,
    FaListOl,
    FaListUl,
    FaAlignLeft,
    FaAlignCenter,
    FaAlignJustify,
    FaAlignRight,
    FaImage,
} from "react-icons/fa";

const ToolBar: React.FC = () => {
    return (
        <div className="flex justify-around sticky top-28 z-[999]">
            <MarkButton format="bold" icon={FaBold} />
            <MarkButton format="italic" icon={FaItalic} />
            <MarkButton format="underline" icon={FaUnderline} />
            <BlockButton format="heading-one" icon={FaHeading} />
            <BlockButton format="heading-two" icon={FaHeading} />
            <BlockButton format="numbered-list" icon={FaListOl} />
            <BlockButton format="bulleted-list" icon={FaListUl} />
            <BlockButton format="left" icon={FaAlignLeft} />
            <BlockButton format="center" icon={FaAlignCenter} />
            <BlockButton format="right" icon={FaAlignRight} />
            <BlockButton format="justify" icon={FaAlignJustify} />
            <InsertImageButton icon={FaImage} />
        </div>
    );
};

export default ToolBar;
