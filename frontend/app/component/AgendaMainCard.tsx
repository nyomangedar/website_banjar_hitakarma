import Image from "next/image";
// type AgendaMainCardProps = {
//     title: string;
//     timefrom: string;
//     timeto: string;
//     locationFrom: string;
//     locationTo: string;
//     date: string;
//     contact: string;
// };

// const AgendaMainCard: React.FC<AgendaMainCardProps> = ({
//     title,
//     timefrom,
//     timeto,
//     locationFrom,
//     locationTo,
//     date,
//     contact,
// }) => {

const AgendaMainCard: React.FC = () => {
    return (
        <div
            className="flex flex-row justify-center items-center"
            style={{
                height: 352,
                width: 1211,
                backgroundColor: "#F0F0F0",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
        >
            <div style={{ width: 508 }}>
                <h4 className=" mb-4">
                    Sembahyang Ngiring Pekuluh: Pura Ciangsana
                </h4>
                <table className="text-left">
                    <tr className="font-normal">
                        <th className="pr-6">
                            <Image
                                src="/icon/carbon_time_red.svg"
                                alt="time"
                                width={16}
                                height={17}
                            />
                        </th>
                        <th className="">
                            <h6 style={{ color: "#4D4C4C" }}>15.00 - 17.00</h6>
                        </th>
                    </tr>
                    <tr>
                        <th className="pr-6">
                            <Image
                                src="/icon/location_red.svg"
                                alt="location from"
                                width={16}
                                height={17}
                            />
                        </th>
                        <th>
                            <h6 style={{ color: "#4D4C4C" }}>
                                Dari Pura Penataran Agung Kertha Bumi
                            </h6>
                        </th>
                    </tr>
                    <tr>
                        <th className="pr-6">
                            <Image
                                src="/icon/location_red.svg"
                                alt="location to"
                                width={16}
                                height={17}
                            />
                        </th>
                        <th>
                            <h6 style={{ color: "#4D4C4C" }}>
                                Ke Pura Ciangsana
                            </h6>
                        </th>
                    </tr>
                    <tr>
                        <th className="pr-6">
                            <Image
                                src="/icon/phone_red.svg"
                                alt="phone"
                                width={16}
                                height={17}
                            />
                        </th>
                        <th>
                            <h6 style={{ color: "#4D4C4C" }}>
                                +62812109999999
                            </h6>
                        </th>
                    </tr>
                </table>
            </div>

            <div
                style={{
                    height: 189,
                    width: 189,
                    backgroundColor: "#9A0000",
                    color: "white",
                }}
                className="flex flex-col justify-around text-center"
            >
                <h5 className="font-extrabold">18 Maret</h5>
                <h5 className="font-extrabold">2023</h5>
            </div>
        </div>
    );
};

export default AgendaMainCard;
