"use client";
import { AgendaFetcher } from "../AgendaFetch";
import AgendaMiniCard from "@/app/component/AgendaMiniCard";

const AgendaLewat = () => {
    const FETCH_URL_AGENDA_YANG_LEWAT = "agenda-yang-lewat";
    const { isLoading, isError, agendas } = AgendaFetcher(
        FETCH_URL_AGENDA_YANG_LEWAT
    );
    const listAgenda = agendas?.data.data;
    let content;
    if (isLoading) {
        content = <>Loading..</>;
    }
    if (isError) {
        content = <>Error</>;
    }
    if (listAgenda && listAgenda.length > 0) {
        content = listAgenda.map((data) => (
            <AgendaMiniCard
                title={data.title}
                date={data.date}
                _id={data._id}
            />
        ));
    } else {
        content = (
            <>
                <h2>
                    Agenda sebelumnya masih kosong, Harap hubungi pihak banjar
                    untuk informasi lebih lanjut
                </h2>
            </>
        );
    }

    return (
        <div
            className="grid"
            style={{ marginTop: 224, padding: "0 150px 0 150px" }}
        >
            <h1>AGENDA YANG LEWAT</h1>
            {content}
        </div>
    );
};

export default AgendaLewat;
