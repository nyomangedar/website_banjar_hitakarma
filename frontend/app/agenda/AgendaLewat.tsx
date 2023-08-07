import AgendaMiniCard from "../component/AgendaMiniCard";
import AgendaFetch from "./AgendaFetch";

const FETCH_URL_AGENDA_YANG_LEWAT = "agenda-yang-lewat";

const AgendaLewat: React.FC = () => {
    return (
        <div className="flex justify-between">
            {/* {AgendaFetch(FETCH_URL_AGENDA_YANG_LEWAT)} */}
            <AgendaMiniCard />
            <AgendaMiniCard />
            <AgendaMiniCard />
        </div>
    );
};

export default AgendaLewat;
