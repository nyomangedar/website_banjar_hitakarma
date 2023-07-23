import Image, { StaticImageData } from "next/image";
import avatar from "../asset/avatar.svg";
import time from "../asset/carbon_time.svg";
import { relative } from "path";
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
            <div
                className="cursor-pointer mr-10"
                style={{ width: 351, height: "100%" }}
            >
                <div
                    style={{
                        width: "100%",
                        height: 204,
                        position: "relative",
                        marginBottom: 21,
                    }}
                >
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
                <div className="flex flex-col gap-2">
                    <div className="align-middle">
                        <p className="font-bold" style={{ height: 81 }}>
                            {title}
                        </p>
                    </div>

                    <div className="flex">
                        <div className="flex flex-row gap-2 pr-5">
                            <Image alt="avatar penulis" src={avatar} />
                            <p>{author}</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image alt="waktu ditulis icon" src={time} />
                            <p>{timestamp}</p>
                        </div>
                    </div>
                    <p
                        className="line-clamp-4"
                        style={{ width: 345, height: 105 }}
                    >
                        {content}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ArtikelCard;
