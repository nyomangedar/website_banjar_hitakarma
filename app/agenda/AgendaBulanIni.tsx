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

const AgendaBulanIni: React.FC = async () => {
    const res = await fetch("http://localhost:8000/agenda-bulan-ini");
    const agendares: agendaResponse = await res.json();
    return (
        <div className="flex justify-between">
            {agendares.data.data.map((data) => {
                return data.title;
            })}
            <AgendaMiniCard />
            <AgendaMiniCard />
            <AgendaMiniCard />
        </div>
    );
};

export default AgendaBulanIni;
