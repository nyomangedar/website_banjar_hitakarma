"use client";
import AgendaMainCard from "../component/AgendaMainCard";
import AgendaBulanIni from "./AgendaBulanIni";
import AgendaLewat from "./AgendaLewat";
import ArtikelCard from "../component/ArtikelCard";
import bg2 from "../asset/pasramanCover.jpeg";
import * as content from "../asset/content/home";
import { AgendaFetcher } from "./AgendaFetch";

const Agenda = () => {
    const FETCH_URL_AGENDA_UPCOMING = "agenda-upcoming";
    const { isLoading, isError, agendas } = AgendaFetcher(
        FETCH_URL_AGENDA_UPCOMING
    );
    const agendaTerdekat = () => {
        const listAgenda = agendas?.data.data;
        if (isLoading) {
            return <p>Loading...</p>;
        }
        if (isError) {
            return <p>Error</p>;
        }
        if (listAgenda && listAgenda.length > 0) {
            const agenda = listAgenda[0];
            return (
                <AgendaMainCard
                    _id={agenda._id}
                    title={agenda.title}
                    timeFrom={agenda.timeFrom}
                    timeUntil={agenda.timeUntil}
                    locationFrom={agenda.locationFrom}
                    locationTo={agenda.locationTo}
                    contact={agenda.contact}
                    date={agenda.date}
                />
            );
        } else {
            return <>Belum ada agenda terdekat</>;
        }
    };
    return (
        <div style={{ marginTop: 224, padding: "0 150px 0 150px" }}>
            <h1>AGENDA</h1>

            <div className="flex flex-col gap-10">
                <h4 className="font-bold">AGENDA TERDEKAT</h4>
                {agendaTerdekat()}

                <a href="/agenda/agenda-upcoming">
                    <h4 className="font-bold">AGENDA YANG AKAN DATANG</h4>
                </a>
                <AgendaBulanIni />
                <a href="/agenda/agenda-yang-lewat">
                    <h4 className="font-bold">AGENDA YANG SUDAH LEWAT</h4>
                </a>
                <AgendaLewat />
                <h4 className="font-bold">BLOG KEGIATAN</h4>
                <div className="flex flex-row justify-between">
                    <ArtikelCard
                        image={bg2}
                        title="Pemilihan Calon Ketua Banjar Hitakarma Pondok Gede Periode 2023-2026"
                        author="Ketut Dobleh"
                        timestamp="5 Jun 2023"
                        content={content.banjar}
                    />

                    <ArtikelCard
                        image={bg2}
                        title="Pemilihan Calon Ketua Banjar Hitakarma Pondok Gede Periode 2023-2026"
                        author="Ketut Dobleh"
                        timestamp="5 Jun 2023"
                        content={content.banjar}
                    />
                    <ArtikelCard
                        image={bg2}
                        title="Pemilihan Calon Ketua Banjar Hitakarma Pondok Gede Periode 2023-2026"
                        author="Ketut Dobleh"
                        timestamp="5 Jun 2023"
                        content={content.banjar}
                    />
                </div>
            </div>
        </div>
    );
};

export default Agenda;
