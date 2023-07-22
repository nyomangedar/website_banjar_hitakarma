import TridatuDivider from "./TridatuDIvider";
import bg from "../asset/banjar.jpeg";
import Image from "next/image";
import { StaticImageData } from "next/image";

type VisiMisiCardProps = {
    image: StaticImageData;
    title: string;
    content: string;
    hCard: number;
    hContent: number;
};

const VisiMisiCard: React.FC<VisiMisiCardProps> = ({
    image,
    title,
    content,
    hCard,
    hContent,
}) => {
    const visi = (
        <>
            <h4>
                Menjadikan Banjar Hitakarma Sebagai Wadah yang Nyaman
                Menyenangkan bagi Krama Banjar dan Lingkungan
            </h4>
        </>
    );
    const misi = (
        <>
            <ol
                className="list-decimal leading-relaxed"
                style={{ fontSize: "25px" }}
            >
                <li>
                    <h5>
                        Kemudahan dan Kenyamanan Bagi Krama Banjar dalam
                        Menyelenggarakan Kegiatan Keagamaan Sosial dan Agama
                    </h5>
                </li>
                <li>
                    <h5>
                        Meningkatkan Kesejahteraan Sosial Hidup dan Sosial Krama
                        Banjar
                    </h5>
                </li>
                <li>
                    <h5>
                        Pemberdayaan Anak Didik, Pemuda dan Krama Banjar dalam
                        Kehidupan Bermasyarakat dan Kepedulian dalam Lingkungan
                    </h5>
                </li>
                <li>
                    <h5>
                        Mewujudkan Rasa Aman, Nyaman, dan Menyenangkan dalam
                        Naungan Organisasi Banjar
                    </h5>
                </li>
            </ol>
        </>
    );
    const nilai = (
        <div className="flex flex-row gap-10">
            <div className="flex flex-row w-auto">
                <h3 className="pr-8 font-extrabold">G</h3>
                <h6>Gerak Cepat (Speed)</h6>
            </div>
            <div className="flex flex-row">
                <h3 className="pr-8 font-extrabold">U</h3>
                <h6>Unity / Persatuan (Solid)</h6>
            </div>
            <div className="flex flex-row">
                <h3 className="pr-8 font-extrabold">Y</h3>
                <h6>Yakin akan Dharma</h6>
            </div>
            <div className="flex flex-row">
                <h3 className="pr-8 font-extrabold">U</h3>
                <h6>Unggah Ungguh (Beretika)</h6>
            </div>
            <div className="flex flex-row">
                <h3 className="pr-8 font-extrabold">B</h3>
                <h6>Be Smart</h6>
            </div>
        </div>
    );
    const contentCase = (content: any) => {
        switch (content) {
            case "visi":
                return visi;
            case "misi":
                return misi;
            case "nilai":
                return nilai;
        }
    };
    return (
        <div
            style={{
                position: "relative",
                height: hCard,
                color: "white",
            }}
        >
            <div
                style={{
                    zIndex: -2,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backgroundColor: "rgba(196, 196, 196, 0.5)",
                }}
            />
            <div
                style={{
                    zIndex: -1,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    background:
                        "linear-gradient(90deg, rgba(0, 0, 0, 1),rgba(255, 255, 255, 0) 90%)",
                }}
            />
            <Image
                alt="cover"
                src={image}
                // sizes="100vw"
                sizes="100vw"
                fill
                style={{
                    objectFit: "cover",
                    zIndex: -3,
                }}
            />
            <TridatuDivider />
            <div
                className="flex flex-col justify-center"
                style={{
                    width: "1002px",
                    minHeight: hContent,
                    padding: "0 100px 0 100px",
                }}
            >
                <h1>{title}</h1>
                {contentCase(content)}
            </div>
        </div>
    );
};

export default VisiMisiCard;
