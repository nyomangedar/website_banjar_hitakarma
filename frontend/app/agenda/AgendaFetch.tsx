"use client";
import { FetchURL } from "../component/FetchURL";
import { useEffect, useState } from "react";

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

const BaseURL = FetchURL();

const AgendaFetcher = async (url: string) => {
    const [agenda, setAgenda] = useState<agendaResponse | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: agendaResponse = await fetch(
                    `http://${BaseURL}/${url}`
                ).then((data) => data.json());
                setAgenda(response);
            } catch (error) {
                console.error("Fetch Error:", error);
            }
        };

        fetchData();
    }, []);
    return agenda;
};
export default AgendaFetcher;
