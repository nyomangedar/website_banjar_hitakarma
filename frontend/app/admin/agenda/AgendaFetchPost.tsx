import { FetchURL } from "@/app/component/FetchURL";
import AgendaType from "@/app/models/AgendaModel";

type response = {
    Status: number;
    Message: String;
};

const BaseURL = FetchURL();
const PostAgendaURL = "agenda";
const AgendaFetchPost = async (data: AgendaType) => {
    const ISODate = new Date(data.date).toISOString();
    data.date = ISODate;
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
