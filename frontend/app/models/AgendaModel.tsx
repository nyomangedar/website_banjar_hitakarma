type AgendaType = {
    _id: String;
    title: String;
    timeFrom: Date;
    timeUntil: Date | null;
    desc: String;
    date: string;
    locationFrom: String;
    locationTo: String | null;
    contact: String;
    pinandita: String[];
    pelaksana: String[] | null;
    tkumpul: String | null;
    catatan: String[] | null;
    transport: String[] | null;
};

export default AgendaType;
