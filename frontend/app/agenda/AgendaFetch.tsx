"use client";
import AgendaMiniCard from "../component/AgendaMiniCard";
import { FetchURL } from "../component/FetchURL";
import { Fetcher } from "swr";

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

const AgendaFetcher: Fetcher<agendaResponse> = (url: string) =>
    fetch(`http://${BaseURL}/${url}`).then((data) => data.json());

export default AgendaFetcher;
