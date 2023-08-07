import AgendaFetch from "./AgendaFetch";

const FETCH_URL_AGENDA_BULAN_INI = "agenda-bulan-ini";

const AgendaBulanIni: React.FC = async () => {
    return (
        <div className="flex justify-between">
            {AgendaFetch(FETCH_URL_AGENDA_BULAN_INI, 3)}
        </div>
    );
};

export default AgendaBulanIni;
