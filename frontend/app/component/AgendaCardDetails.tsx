import Image from "next/image";
import AgendaType from "../models/AgendaModel";
type AgendaCardDetails = Pick<
    AgendaType,
    "timeFrom" | "timeUntil" | "locationFrom" | "locationTo" | "contact"
>;

const AgendaCardDetails: React.FC<AgendaCardDetails> = ({
    timeFrom,
    timeUntil,
    locationFrom,
    locationTo,
    contact,
}) => {
    return (
        <table className="text-left">
            <tbody>
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
                        <h6 style={{ color: "#4D4C4C" }}>
                            {timeFrom.toString()}{" "}
                            {timeUntil && <>- {timeUntil?.toString()}</>}
                        </h6>
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
                            Dari {locationFrom}
                        </h6>
                    </th>
                </tr>
                {locationTo && (
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
                                Ke {locationTo}
                            </h6>
                        </th>
                    </tr>
                )}

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
                        <h6 style={{ color: "#4D4C4C" }}>{contact}</h6>
                    </th>
                </tr>
            </tbody>
        </table>
    );
};

export default AgendaCardDetails;
