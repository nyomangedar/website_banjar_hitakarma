"use client";
import { AgendaFetcher } from "./AgendaFetch";

import AgendaMiniCard from "../component/AgendaMiniCard";

const FETCH_URL_AGENDA_BULAN_INI = "agenda-upcoming";

const AgendaBulanIni: React.FC = () => {
    const { isLoading, isError, agendas } = AgendaFetcher(
        FETCH_URL_AGENDA_BULAN_INI
    );
    const listAgenda = agendas?.data.data;
    if (isLoading) {
        return <>Loading ...</>;
    }
    if (isError) {
        return <>Error</>;
    }

    if (listAgenda && listAgenda?.length > 0) {
        const content = agendas?.data.data
            .slice(0, 3)
            .map((agenda, index: number) => {
                return (
                    <AgendaMiniCard
                        key={index}
                        title={agenda.title}
                        date={agenda.date}
                        _id={agenda._id}
                    />
                );
            });
        return <div className="grid grid-cols-3">{content}</div>;
    } else {
        return (
            <div className="grid">
                Belum ada agenda untuk kedepannya, silahkan hubungi kontak kami
                untuk informasi lebih lanjut.
            </div>
        );
    }
};

export default AgendaBulanIni;
