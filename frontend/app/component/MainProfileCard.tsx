import { StaticImageData } from "next/image";
import Image from "next/image";

type MainProfileCardProps = {
    image: StaticImageData;
    title: String;
    subtitle: String;
    text: String;
    left: boolean;
};
const MainProfileCard: React.FC<MainProfileCardProps> = ({
    image,
    title,
    subtitle,
    text,
    left = true,
}) => {
    const content1 = (
        <>
            <div>
                <h2 className="font-bold">{title}</h2>
                <h5>{subtitle}</h5>
            </div>
            <div className="flex gap-16">
                <div
                    style={{
                        height: "351px",
                        minWidth: "570px",
                        position: "relative",
                    }}
                >
                    <Image
                        alt=""
                        src={image}
                        sizes="100vw"
                        fill
                        style={{
                            objectFit: "cover",
                            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
                        }}
                    />
                </div>
                <div className="flex flex-col gap-10">
                    <h6>{text}</h6>
                    <button className="main">Read More</button>
                </div>
            </div>
        </>
    );

    const content2 = (
        <>
            <div className="flex flex-col text-end">
                <h2 className="font-bold">{title}</h2>
                <h5>{subtitle}</h5>
            </div>
            <div className="flex gap-16">
                <div className="flex flex-col gap-10">
                    <h6>{text}</h6>
                    <button className="main">Read More</button>
                </div>
                <div
                    style={{
                        height: "351px",
                        minWidth: "570px",
                        position: "relative",
                    }}
                >
                    <Image
                        alt=""
                        src={image}
                        sizes="100vw"
                        fill
                        style={{
                            objectFit: "cover",
                            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        }}
                    />
                </div>
            </div>
        </>
    );
    return (
        <div style={{ padding: "0 150px 0 150px", marginBottom: "170px" }}>
            {left ? content1 : content2}
        </div>
    );
};
export default MainProfileCard;
