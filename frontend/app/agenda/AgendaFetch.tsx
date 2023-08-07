import AgendaMiniCard from "../component/AgendaMiniCard";

type agendaData = {
    title: string;
};

type agendaResponse = {
    message: string;
    status: string;
    data: {
        data: agendaData[];
    };
};

const AgendaFetch = async (url: string, limit?: number) => {
    const res: agendaResponse = await fetch(
        `http://localhost:8000/${url}`
    ).then((data) => data.json());
    const content = res.data.data.slice(0, limit).map((data) => {
        return <AgendaMiniCard />;
    });
    return content;
};

export default AgendaFetch;
