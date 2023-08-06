import Image from "next/image";
import { galeri } from "../asset/dummy/galeri";
import GaleryModals from "./GaleryModals";
import { useState } from "react";
const Galeri: React.FC = () => {
    const [modalState, setModalState] = useState(false);
    const [imagePath, setImagePath] = useState("");
    const activateModal = (path: string) => {
        setImagePath(path);
        setModalState(true);
    };
    const closeModal = () => {
        setModalState(false);
    };
    const row1 = galeri.slice(0, 3).map((data) => {
        return (
            <div
                key={data}
                className="cursor-pointer transition-transform hover:scale-110"
                style={{
                    width: 394,
                    height: 300,
                    position: "relative",
                }}
                onClick={() => activateModal(data)}
            >
                <Image
                    src={data}
                    alt="galery"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                        zIndex: -40,
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                    className=""
                />
            </div>
        );
    });
    const row2 = galeri.slice(3).map((data) => {
        return (
            <div
                key={data}
                className="cursor-pointer transition-transform hover:scale-110"
                style={{
                    width: 394,
                    height: 300,
                    position: "relative",
                }}
                onClick={() => activateModal(data)}
            >
                <Image
                    src={data}
                    alt="galery"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                        zIndex: -40,
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                />
            </div>
        );
    });
    return (
        <>
            <GaleryModals
                activate={modalState}
                imagePath={imagePath}
                closeModal={closeModal}
            />
            <div className="flex flex-col items-center">
                <div className="flex">{row1}</div>
                <div className="flex">{row2}</div>
            </div>
        </>
    );
};

export default Galeri;
