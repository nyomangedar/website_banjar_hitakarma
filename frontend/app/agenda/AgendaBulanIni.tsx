"use client";
import AgendaFetcher from "./AgendaFetch";
import useSWR from "swr";
import AgendaMiniCard from "../component/AgendaMiniCard";

const FETCH_URL_AGENDA_BULAN_INI = "agenda-bulan-ini";

const AgendaBulanIni: React.FC = async () => {
    const { data, isLoading } = useSWR(
        FETCH_URL_AGENDA_BULAN_INI,
        AgendaFetcher
    );
    const content = data?.data.data.map((agenda) => {
        return <AgendaMiniCard key={agenda.title} />;
    });
    return <div className="flex justify-between">{content}</div>;
};

export default AgendaBulanIni;
