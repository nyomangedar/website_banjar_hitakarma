"use client";
import { AgendaFetcherSingle } from "../AgendaFetch";
import AgendaDetails from "./AgendaDetails";
const SelectedAgenda: React.FC<{ params: { id: string } }> = ({ params }) => {
    const GET_FETCH_URL = `agenda/${params.id}`;
    const { isLoading, isError, agenda } = AgendaFetcherSingle(GET_FETCH_URL);
    let content;
    if (isLoading) {
        content = <>Loading...</>;
    }
    if (isError) {
        content = <>Error...</>;
    }
    if (agenda) {
        const agendaParam = agenda.data.data;
        content = (
            <AgendaDetails
                _id={agendaParam._id}
                title={agendaParam.title}
                timeFrom={agendaParam.timeFrom}
                timeUntil={agendaParam.timeUntil}
                desc={agendaParam.desc}
                date={agendaParam.date}
                locationFrom={agendaParam.date}
                locationTo={agendaParam.locationTo}
                pinandita={agendaParam.pinandita}
                tkumpul={agendaParam.tkumpul}
                catatan={agendaParam.catatan}
                transport={agendaParam.transport}
                contact={agendaParam.contact}
                pelaksana={agendaParam.pelaksana}
            />
        );
    }

    return (
        <div style={{ marginTop: 224, padding: "0 150px 0 150px" }}>
            <h3>Agenda</h3>
            {content}
        </div>
    );
};

export default SelectedAgenda;
