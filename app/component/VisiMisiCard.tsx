import TridatuDivider from "./TridatuDIvider";
import bg from "../asset/banjar.jpeg";
import Image from "next/image";
const VisiMisiCard: React.FC = () => {
    return (
        <div style={{position:"relative", height:334, color:"white" }}>
            <div style={{zIndex:-1,position:"absolute",width:"100%", height:"100%", background:"linear-gradient(90deg, #000 39.90%, #C4C4C4 100%)"}}/>
            <Image
                alt="pasraman"
                src={bg}
                // sizes="100vw"
                sizes="100vw"
                fill
                style={{
                    objectFit: "cover",
                    zIndex: -10,
                }}
            />
            <TridatuDivider />
            <div className="flex flex-col justify-center"style={{ width:"1002px",height:"100%", padding: "0 100px 0 100px" }}>
                <h1>Visi</h1>
                <h4 className="font-secondary">
                    Menjadikan Banjar Hitakarma sebagai wadah yang nyaman
                    menyenangkan bagi krama banjar dan lingkungan
                </h4>
            </div>
        </div>
    );
};

export default VisiMisiCard;
