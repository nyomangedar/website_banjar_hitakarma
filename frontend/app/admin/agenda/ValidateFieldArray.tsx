import AgendaType from "@/app/models/AgendaModel";

const ValidateFieldArray = (data: AgendaType) => {
    let isValid: boolean = true;
    let error: keyof AgendaType = "pinandita";

    data.pinandita.forEach((item) => {
        if (item.trim() === "") {
            isValid = false;
            error = "pinandita";
        }
    });

    data.pelaksana?.forEach((item) => {
        if (item.trim() === "") {
            isValid = false;
            error = "pelaksana";
        }
    });

    data.transport?.forEach((item) => {
        if (item.trim() === "") {
            isValid = false;
            error = "transport";
        }
    });

    return { isValid, error };
};

export default ValidateFieldArray;
