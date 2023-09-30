import AgendaMiniCard from "../component/AgendaMiniCard";
import AgendaFetcher from "./AgendaFetch";

const FETCH_URL_AGENDA_YANG_LEWAT = "agenda-yang-lewat";

const AgendaLewat: React.FC = () => {
    const { isLoading, isError, agendas } = AgendaFetcher(
        FETCH_URL_AGENDA_YANG_LEWAT
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
                Belum Ada Agenda Yang Selesai, silahkan hubungi kontak kami
                untuk informasi lebih lanjut.
            </div>
        );
    }
};

export default AgendaLewat;
