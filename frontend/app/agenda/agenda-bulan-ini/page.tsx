import AgendaFetch from "../AgendaFetch";

const FETCH_URL_AGENDA_BULAN_INI = "agenda-bulan-ini";

const AgendaBulanIni: React.FC = async () => {
    return (
        <>
            <div
                className="grid"
                style={{ marginTop: 224, padding: "0 150px 0 150px" }}
            >
                <h1>AGENDA BULAN INI</h1>
                {AgendaFetch(FETCH_URL_AGENDA_BULAN_INI)}
            </div>
        </>
    );
};

export default AgendaBulanIni;
