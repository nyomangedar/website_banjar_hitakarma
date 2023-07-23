import Image, { StaticImageData } from "next/image";
import avatar from "../asset/avatar.svg";
import time from "../asset/carbon_time.svg";
type ArtikelCardProps = {
    image: StaticImageData;
    title: string;
    author: string;
    timestamp: string;
    content: string;
};
const ArtikelCard: React.FC<ArtikelCardProps> = ({
    image,
    title,
    author,
    timestamp,
    content,
}) => {
    return (
        <>
            <div className="flex flex-col" style={{ width: 436, height: 351 }}>
                <div style={{ width: "100%", height: "204px" }}>
                    <Image
                        alt="card image thumbnail"
                        src={image}
                        sizes="100vw"
                        fill
                        style={{
                            objectFit: "cover",
                            zIndex: -1,
                        }}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold">{title}</p>
                    <div className="flex">
                        <div className="flex flex-row gap-2 pr-20">
                            <Image alt="avatar penulis" src={avatar} />
                            <p>{author}</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image alt="waktu ditulis icon" src={time} />
                            <p>{timestamp}</p>
                        </div>
                    </div>
                    <p
                        className="text-ellipsis overflow-hidden whitespace-nowrap"
                        style={{ width: 345, maxHeight: 93 }}
                    >
                        {content}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ArtikelCard;
