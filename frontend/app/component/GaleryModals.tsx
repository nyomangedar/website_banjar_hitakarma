import Image from "next/image";
import vector from "../asset/vectorwhite.svg";

type GaleryModalsProps = {
    imagePath: string;
    activate: Boolean;
    closeModal: () => void;
};
const GaleryModals: React.FC<GaleryModalsProps> = ({
    imagePath,
    activate,
    closeModal,
}) => {
    const content = (
        <div
            className="flex justify-center items-center backdrop-blur-sm"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 100,
            }}
        >
            <button
                style={{
                    position: "absolute",
                    right: 20,
                    top: 10,
                }}
                onClick={closeModal}
            >
                <div className="flex rounded-full justify-center items-center text-white">
                    <h2 className="font-extrabold">X</h2>
                </div>
            </button>
            <button
                style={{
                    position: "absolute",
                    left: 30,
                    bottom: 350,
                }}
            >
                <Image src={vector} alt="next" />
            </button>
            <button
                className="rotate-180"
                style={{
                    position: "absolute",
                    right: 30,
                    bottom: 350,
                }}
            >
                <Image src={vector} alt="next" />
            </button>
            <Image
                src={imagePath}
                alt="img"
                fill
                style={{
                    objectFit: "contain",
                    width: "100%",
                    zIndex: -1,
                }}
            />
        </div>
    );
    return <>{activate && content}</>;
};

export default GaleryModals;
