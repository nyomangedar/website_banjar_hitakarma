import Image from "next/image";
const Footer: React.FC = () => {
    return (
        <div
            style={{
                height: 470,
                position: "relative",
                padding: "68px 100px 0 100px",
            }}
        >
            <Image
                src="/image/polengbg.jpg"
                fill
                sizes="100vw"
                alt="logo"
                style={{
                    objectFit: "cover",
                    zIndex: -40,
                    filter: "brightness(0.5)",
                }}
            />
            <div className="flex flex-col gap-10 text-white pl-4">
                <div className="flex items-center gap-6">
                    <div
                        style={{
                            width: 123,
                            height: 123,
                            position: "relative",
                        }}
                    >
                        <Image
                            src="/image/logo.png"
                            fill
                            sizes="100vw"
                            alt="logo"
                            style={{
                                objectFit: "cover",
                                zIndex: -40,
                            }}
                        />
                    </div>
                    <h5
                        className="font-bold"
                        style={{
                            width: 325,
                            height: 74,
                        }}
                    >
                        BANJAR HITAKARMA PONDOK GEDE
                    </h5>
                </div>

                <div className="text-left">
                    <tr>
                        <th>
                            <Image
                                src="/icon/location_red.svg"
                                alt="location"
                                width={13}
                                height={17}
                            />
                        </th>
                        <th>
                            <h6>Penataran Agung Kertha Bumi</h6>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <Image
                                src="/icon/phone_red.svg"
                                alt="phone"
                                width={13}
                                height={16}
                            />
                        </th>
                        <th>
                            <h6>+62 812109999999</h6>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <Image
                                src="/icon/email_red.svg"
                                alt="email logo"
                                width={24}
                                height={24}
                            />
                        </th>
                        <th>
                            <h6>hitakarma.pondokgede@gmail.com</h6>
                        </th>
                    </tr>
                </div>
            </div>
        </div>
    );
};

export default Footer;
