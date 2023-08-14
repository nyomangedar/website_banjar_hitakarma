"use client";
import AgendaFetcher from "../AgendaFetch";
import useSWR from "swr";
import AgendaMiniCard from "@/app/component/AgendaMiniCard";
const FETCH_URL_AGENDA_YANG_LEWAT = "agenda-yang-lewat";

const AgendaBulanIni: React.FC = async () => {
    const { data, isLoading } = useSWR(
        FETCH_URL_AGENDA_YANG_LEWAT,
        AgendaFetcher
    );
    const content = data?.data.data.map((agenda) => {
        return <AgendaMiniCard key={agenda.title} />;
    });
    return (
        <>
            <div
                className="grid"
                style={{ marginTop: 224, padding: "0 150px 0 150px" }}
            >
                <h1>AGENDA YANG LEWAT</h1>

                {content}
            </div>
        </>
    );
};

export default AgendaBulanIni;
