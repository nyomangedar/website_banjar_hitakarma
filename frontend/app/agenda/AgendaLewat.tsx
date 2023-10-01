import AgendaMiniCard from "../component/AgendaMiniCard";
import { AgendaFetcher } from "./AgendaFetch";

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
                        _id={agenda._id}
                    />
                );
            });
        return <div className="grid grid-cols-3">{content}</div>;
    } else {
        return (
            <div>
                Belum ada agenda yang selesai, sliakan hubungi kontak kami untuk
                informasi lebih lanjut.
            </div>
        );
    }
};

export default AgendaLewat;
