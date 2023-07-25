import Image from "next/image";
import { galeri } from "../asset/dummy/galeri";
const Galeri: React.FC = () => {
    const row1 = galeri.slice(0, 3).map((data) => {
        return (
            <div
                className="cursor-pointer transition-transform hover:scale-110"
                style={{
                    width: 394,
                    height: 300,
                    position: "relative",
                }}
            >
                <Image
                    src={data}
                    alt="galery"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                        zIndex: -40,
                    }}
                    className=""
                />
            </div>
        );
    });
    const row2 = galeri.slice(3).map((data) => {
        return (
            <div
                className="cursor-pointer transition-transform hover:scale-110"
                style={{
                    width: 394,
                    height: 300,
                    position: "relative",
                }}
            >
                <Image
                    src={data}
                    alt="galery"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                        zIndex: -40,
                    }}
                />
            </div>
        );
    });
    return (
        <div className="flex flex-col items-center">
            <div className="flex">{row1}</div>
            <div className="flex">{row2}</div>
        </div>
    );
};

export default Galeri;
