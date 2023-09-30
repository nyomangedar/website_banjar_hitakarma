import AgendaMainCard from "@/app/component/AgendaMainCard";
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
        var content;
        if (component && component.length > 0) {
            content = component.map((data) => {
                <li>{data}</li>;
            });
        } else {
            return null;
        }
    };

    return (
        <div style={{ marginTop: 224, padding: "0 150px 0 150px" }}>
            <h1>AGENDA</h1>

            <div>
                <h4>{title}</h4>

                <div>
                    <AgendaMainCard />
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    dapibus ex mi, a elementum diam vestibulum eget. Maecenas et
                    suscipit velit. Vivamus tincidunt lorem id dictum pretium.
                    Mauris non auctor ex. Ut vel justo enim. Sed nec augue
                    posuere orci tempor ultricies sit amet vitae leo. Curabitur
                    malesuada venenatis ligula vel ornare.
                </p>

                <div>
                    <h4>PINANDITA</h4>
                    <ul>{listComponents(pinandita)}</ul>
                </div>

                <div>
                    <h4>PELAKSANA</h4>
                    <ul>{listComponents(pelaksana)}</ul>
                </div>

                <div>
                    <h4>TITIK KUMPUL</h4>
                    <ul>
                        <li>{tkumpul}</li>
                    </ul>
                </div>

                <div>
                    <h4>TRANSPORTASI</h4>
                    <ul>{transport}</ul>
                </div>

                <div>
                    <h4>CATATAN</h4>
                    <ul>
                        <li>{catatan}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AgendaDetails;
