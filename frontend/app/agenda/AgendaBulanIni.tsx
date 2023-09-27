"use client";
import AgendaFetcher from "./AgendaFetch";

import AgendaMiniCard from "../component/AgendaMiniCard";

const FETCH_URL_AGENDA_BULAN_INI = "agenda-bulan-ini";

const AgendaBulanIni: React.FC = () => {
    // return <></>;
    const { isLoading, isError, agendas } = AgendaFetcher(
        FETCH_URL_AGENDA_BULAN_INI
    );
    if (isLoading) {
        console.log("isLoading");
        return <>Loading ...</>;
    }
    if (isError) {
        console.log("isError");
        return <>Error</>;
    }

    const content = agendas?.data.data.map((agenda) => {
        return <AgendaMiniCard key={agenda.title} />;
    });

    return <div className="flex justify-between">{content}</div>;
};

export default AgendaBulanIni;
