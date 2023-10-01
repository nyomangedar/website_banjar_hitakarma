import AgendaCardDetails from "@/app/component/AgendaCardDetails";
import AgendaMainCard from "@/app/component/AgendaMainCard";
import { BreakdownISODate } from "@/app/component/ParseDate";
import AgendaType from "@/app/models/AgendaModel";
import Image from "next/image";

const AgendaDetails: React.FC<AgendaType> = ({
    title,
    timeFrom,
    timeUntil,
    desc,
    date,
    locationFrom,
    locationTo,
    contact,
    pinandita,
    pelaksana,
    tkumpul,
    catatan,
    transport,
}) => {
    const listComponents = (component: String[] | null) => {
        if (component && component.length > 0) {
            return component.map((data, index: number) => (
                <li key={index}>{data}</li>
            ));
        } else {
            return null;
        }
    };

    const { day, month, year } = BreakdownISODate(date);

    return (
        <div>
            <div className="flex flex-col gap-10">
                <h4 className="font-bold">{title}</h4>

                <div className="flex justify-between">
                    <AgendaCardDetails
                        timeFrom={timeFrom}
                        timeUntil={timeUntil}
                        locationFrom={locationFrom}
                        locationTo={locationTo}
                        contact={contact}
                    />
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

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    dapibus ex mi, a elementum diam vestibulum eget. Maecenas et
                    suscipit velit. Vivamus tincidunt lorem id dictum pretium.
                    Mauris non auctor ex. Ut vel justo enim. Sed nec augue
                    posuere orci tempor ultricies sit amet vitae leo. Curabitur
                    malesuada venenatis ligula vel ornare.
                </p>

                {pinandita && (
                    <div>
                        <h4 className="font-bold">PINANDITA</h4>
                        <ul className="list-disc">
                            {listComponents(pinandita)}
                        </ul>
                    </div>
                )}

                {pelaksana && (
                    <div>
                        <h4 className="font-bold">PELAKSANA</h4>
                        <ul className="list-disc">
                            {listComponents(pelaksana)}
                        </ul>
                    </div>
                )}

                {tkumpul && (
                    <div>
                        <h4 className="font-bold">TITIK KUMPUL</h4>
                        <ul className="list-disc">
                            <li>{tkumpul}</li>
                        </ul>
                    </div>
                )}

                {transport && (
                    <div>
                        <h4 className="font-bold">TRANSPORTASI</h4>
                        <ul className="list-disc">
                            {listComponents(transport)}
                        </ul>
                    </div>
                )}

                {catatan && (
                    <div>
                        <h4 className="font-bold">CATATAN</h4>
                        <ul className="list-disc">
                            <li>{catatan}</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AgendaDetails;
