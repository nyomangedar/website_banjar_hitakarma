"use client";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import AgendaFetchPost from "./AgendaFetchPost";

type IFormInput = {
    Title: String;
    TimeFrom: Date;
    TimeUntil: Date | null;
    Desc: String;
    Date: Date;
    LocationFrom: String;
    LocationTo: String | null;
    Contact: String;
    Pinandita: String[];
    Pelaksana: String[] | null;
    Tkumpul: String | null;
    Catatan: String[] | null;
    Transport: String[] | null;
};

const AdminAgenda = () => {
    const { register, handleSubmit, control } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(await AgendaFetchPost(data));
    };
    const {
        fields: fieldsPinandita,
        append: appendPinandita,
        remove: removePinandita,
    } = useFieldArray({
        control,
        name: "Pinandita",
    });

    const {
        fields: fieldsPelaksana,
        append: appendPelaksana,
        remove: removePelaksana,
    } = useFieldArray({
        control,
        name: "Pelaksana",
    });

    const {
        fields: fieldsTransport,
        append: appendTransport,
        remove: removeTransport,
    } = useFieldArray({
        control,
        name: "Transport",
    });

    const fieldArrayComponent = (
        attribute: "Pinandita" | "Pelaksana" | "Transport",
        fields: Array<any>,
        append: Function,
        remove: Function,
        title: String
    ) => {
        return (
            <>
                <label>{title}</label>
                {fields.map((field: any, index: number) => (
                    <div key={field.id} className="flex gap-1">
                        <input
                            {...register(`${attribute}.${index}`)}
                            className="rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => append("")}
                    className="block rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add {title}
                </button>
            </>
        );
    };

    return (
        <div style={{ marginTop: 224, padding: "0 150px 0 150px" }}>
            <h1>Create Agenda</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
            >
                <div>
                    <label>Title</label>
                    <input
                        {...register("Title", { required: true })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label>Desc</label>
                    <input
                        {...register("Desc", { required: true })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        {...register("Date", { required: true })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label>TimeFrom</label>
                    <input
                        {...register("TimeFrom", { required: true })}
                        type="time"
                        min="00:00"
                        max="23:59"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label>TimeUntil</label>
                    <input
                        {...register("TimeUntil", { required: false })}
                        type="time"
                        min="00:00"
                        max="23:59"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label>LocationFrom</label>
                    <input
                        {...register("LocationFrom", { required: true })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label>LocationTo</label>
                    <input
                        {...register("LocationTo", { required: false })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label>Contact</label>
                    <input
                        {...register("Contact", { required: true })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    {fieldArrayComponent(
                        "Pinandita",
                        fieldsPinandita,
                        appendPinandita,
                        removePinandita,
                        "Pinandita"
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    {fieldArrayComponent(
                        "Pelaksana",
                        fieldsPelaksana,
                        appendPelaksana,
                        removePelaksana,
                        "Pelaksana"
                    )}
                </div>
                <div>
                    <label>Tkumpul</label>
                    <input
                        {...register("Tkumpul", { required: false })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    {fieldArrayComponent(
                        "Transport",
                        fieldsTransport,
                        appendTransport,
                        removeTransport,
                        "Transport"
                    )}
                </div>
                <div>
                    <label>Catatan</label>
                    <input
                        {...register("Catatan", { required: false })}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </form>
        </div>
    );
};
export default AdminAgenda;