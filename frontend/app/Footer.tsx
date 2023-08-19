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

                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: 50 }}>
                                <Image
                                    src="/icon/location_red.svg"
                                    alt="location"
                                    width={13}
                                    height={17}
                                />
                            </td>
                            <td className="pr-3">
                                <h6>Penataran Agung Kertha Bumi</h6>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 50 }}>
                                <Image
                                    src="/icon/phone_red.svg"
                                    alt="phone"
                                    width={13}
                                    height={16}
                                />
                            </td>
                            <td className="pr-3">
                                <h6>+62 812109999999</h6>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 50 }}>
                                <Image
                                    src="/icon/email_red.svg"
                                    alt="email logo"
                                    width={24}
                                    height={24}
                                />
                            </td>
                            <td className="pr-3">
                                <h6>hitakarma.pondokgede@gmail.com</h6>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex flex-col text-center">
                    <div
                        style={{
                            backgroundColor: "white",
                            height: 1,
                            margin: "20px 0 10px 0",
                        }}
                    />
                    <h6>Copyright © 2023 Banjar Hitakarma Pondok Gede</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;
