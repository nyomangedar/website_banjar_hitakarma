"use client";
import { FetchURL } from "../component/FetchURL";
import { useEffect, useState } from "react";
import AgendaType from "../models/AgendaModel";

type agendaResponse = {
    message: string;
    status: string;
    data: {
        data: AgendaType[];
    };
};

const BaseURL = FetchURL();

const AgendaFetcher = (url: string) => {
    const [agendas, setAgenda] = useState<agendaResponse | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`http://${BaseURL}/${url}`)
            .then((response) => response.json())
            .then((data) => {
                setAgenda(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    return { agendas, isLoading, isError };
};
export default AgendaFetcher;
