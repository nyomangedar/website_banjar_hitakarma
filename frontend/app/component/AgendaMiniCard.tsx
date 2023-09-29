import AgendaType from "../models/AgendaModel";
import { BreakdownISODate } from "./ParseDate";

type AgendaMiniCard = Pick<AgendaType, "title" | "date">;

const AgendaMiniCard: React.FC<AgendaMiniCard> = ({ title, date }) => {
    const { year, month, day } = BreakdownISODate(date);
    return (
        <div
            className="flex justify-center items-center gap-2"
            style={{ width: 366, height: 195, backgroundColor: "#F0F0F0" }}
        >
            <div
                style={{
                    width: 99,
                    height: 120,
                    backgroundColor: "#9A0000",
                    color: "white",
                }}
                className="flex flex-col justify-around text-center"
            >
                <h6 className="font-extrabold">
                    {day} {month}
                </h6>
                <h6 className="font-extrabold">{year}</h6>
            </div>
            <h6 style={{ width: 203 }}>{title}</h6>
        </div>
    );
};

export default AgendaMiniCard;
