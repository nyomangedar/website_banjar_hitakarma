import AgendaFetch from "../AgendaFetch";

const FETCH_URL_AGENDA_YANG_LEWAT = "agenda-yang-lewat";

const AgendaBulanIni: React.FC = async () => {
    return (
        <>
            <div
                className="grid"
                style={{ marginTop: 224, padding: "0 150px 0 150px" }}
            >
                <h1>AGENDA YANG LEWAT</h1>
                {AgendaFetch(FETCH_URL_AGENDA_YANG_LEWAT)}
            </div>
        </>
    );
};

export default AgendaBulanIni;
