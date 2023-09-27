import { FetchURL } from "@/app/component/FetchURL";

type IFormInput = {
    Title: String;
    TimeFrom: Date;
    TimeUntil: Date | null;
    Desc: String;
    Date: string;
    LocationFrom: String;
    LocationTo: String | null;
    Contact: String;
    Pinandita: String[];
    Pelaksana: String[] | null;
    Tkumpul: String | null;
    Catatan: String[] | null;
    Transport: String[] | null;
};

type response = {
    Status: number;
    Message: String;
};

const BaseURL = FetchURL();
const PostAgendaURL = "agenda";
const AgendaFetchPost = async (data: IFormInput) => {
    const ISODate = new Date(data.Date).toISOString();
    data.Date = ISODate;
    try {
        const res: response = await fetch(
            `http://${BaseURL}/${PostAgendaURL}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        ).then((data) => data.json());
        return res;
    } catch (error) {
        console.error("Fetch Error: ", error);
    }
};
export default AgendaFetchPost;
