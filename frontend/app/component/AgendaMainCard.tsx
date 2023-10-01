import Image from "next/image";
import AgendaCardDetails from "./AgendaCardDetails";
import AgendaType from "../models/AgendaModel";
import { BreakdownISODate } from "./ParseDate";
import { useRouter } from "next/router";
import Link from "next/link";

type AgendaMainCard = Pick<
    AgendaType,
    | "_id"
    | "timeFrom"
    | "timeUntil"
    | "locationFrom"
    | "locationTo"
    | "contact"
    | "title"
    | "date"
>;

const AgendaMainCard: React.FC<AgendaMainCard> = ({
    _id,
    timeFrom,
    timeUntil,
    locationFrom,
    locationTo,
    title,
    contact,
    date,
}) => {
    const { year, month, day } = BreakdownISODate(date);
    return (
        <Link href={`/agenda/${_id}`}>
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
                    <h4 className=" mb-4">{title}</h4>
                    <AgendaCardDetails
                        locationTo={locationTo}
                        timeFrom={timeFrom}
                        timeUntil={timeUntil}
                        locationFrom={locationFrom}
                        contact={contact}
                    />
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
                    <h5 className="font-extrabold">
                        {day} {month}
                    </h5>
                    <h5 className="font-extrabold">{year}</h5>
                </div>
            </div>
        </Link>
    );
};

export default AgendaMainCard;
