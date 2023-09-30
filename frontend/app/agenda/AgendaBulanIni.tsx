"use client";
import AgendaFetcher from "./AgendaFetch";

import AgendaMiniCard from "../component/AgendaMiniCard";

const FETCH_URL_AGENDA_BULAN_INI = "agenda-bulan-ini";

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
                    />
                );
            });
        return <div className="flex justify-between">{content}</div>;
    } else {
        return (
            <div className="flex justify-between">
                Belum Ada Agenda Untuk Bulan Ini, Silahkan Hubungi Kontak Kami
                Untuk Informasi Lebih Lanjut.
            </div>
        );
    }
};

export default AgendaBulanIni;
