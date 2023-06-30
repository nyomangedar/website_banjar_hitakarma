import Image from "next/image";
import { ReactNode } from "react";
import logo from "./asset/logo.png";
import vector from "./asset/Vector.svg";

function navbarLinks(
    name: string,
    dropdown: Boolean = false,
    links: [string, string][] | null = null
) {
    let id = name.toLowerCase();
    let dropdownId = dropdown + name.toLowerCase();
    function dropdownList(): ReactNode {
        return (
            <>
                {links?.map((data) => (
                    <li>
                        <a href={data[1]} className="font-primary">
                            {data[0]}
                        </a>
                    </li>
                ))}
            </>
        );
    }
    return (
        <>
            <button
                id={id}
                data-dropdown-toggle={dropdownId}
                className="flex gap-1 items-center font-primary"
            >
                <h5 className="font-medium">{name}</h5>{" "}
                {dropdown && (
                    <Image
                        src={vector}
                        width={19}
                        height={11}
                        alt="vector logo"
                    />
                )}
            </button>
            {links && (
                <div
                    id={dropdownId}
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul
                        aria-labelledby={id}
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                        {dropdownList()}
                    </ul>
                </div>
            )}
        </>
    );
}
export default function Navbar() {
    return (
        <nav>
            <div
                className="flex items-center place-content-between white h-36"
                style={{
                    color: "black",
                    backgroundColor: "white",
                    padding: "0 100px 0 100px",
                }}
            >
                <Image src={logo} width={123} height={123} alt="logo" />
                <div className="flex items-center gap-7">
                    {navbarLinks("BANJAR", true, [
                        ["Banjar Hitakarma", "banjar-hitakarma"],
                    ])}
                    {navbarLinks("PURA")}
                    {navbarLinks("ORGANISASI", true)}
                    {navbarLinks("EVENT", true)}
                    {navbarLinks("KONTAK", true)}
                </div>
            </div>
        </nav>
    );
}
