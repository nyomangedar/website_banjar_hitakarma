"use client";
import AgendaFetcher from "./AgendaFetch";

import AgendaMiniCard from "../component/AgendaMiniCard";

const FETCH_URL_AGENDA_BULAN_INI = "agenda-bulan-ini";

const AgendaBulanIni: React.FC = async () => {
    // return <></>;
    const agendas = await AgendaFetcher(FETCH_URL_AGENDA_BULAN_INI);
    console.log(agendas?.data.data.length);
    const content = agendas?.data.data.map((agenda) => {
        return <AgendaMiniCard key={agenda.title} />;
    });

    return <div className="flex justify-between">{content}</div>;
};

export default AgendaBulanIni;
