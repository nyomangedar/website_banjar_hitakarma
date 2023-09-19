"use client";
import AgendaFetcher from "../AgendaFetch";
import AgendaMiniCard from "@/app/component/AgendaMiniCard";

const FETCH_URL_AGENDA_BULAN_INI = "agenda-bulan-ini";

const AgendaBulanIni: React.FC = async () => {
    const agendas = await AgendaFetcher(FETCH_URL_AGENDA_BULAN_INI);
    const content = agendas?.data.data.map((agenda) => {
        return <AgendaMiniCard key={agenda.title} />;
    });
    return (
        <>
            <div
                className="grid"
                style={{ marginTop: 224, padding: "0 150px 0 150px" }}
            >
                <h1>AGENDA BULAN INI</h1>
                {content}
            </div>
        </>
    );
};

export default AgendaBulanIni;
