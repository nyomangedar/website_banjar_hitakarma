"use client";
import Image from "next/image";
import { useState } from "react";

type NavbarLinksProps = {
    name: string;
    dropdown?: Boolean;
    active?: Boolean;
    links?: [string, string][];
    onButtonClicks?: () => void;
};

const NavbarLinks: React.FC<NavbarLinksProps> = ({
    name,
    dropdown = false,
    active = false,
    links = null,
    onButtonClicks,
}) => {
    const dropdownContent = () => {
        return (
            <ul>
                {links?.map((data) => (
                    <li key={data[1]} className="mb-2">
                        <a className="font-primary" href={data[1]}>
                            <h6 className="hover:bg-gray-300 px-4 py-1">
                                {data[0]}
                            </h6>
                        </a>
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div>
            <button
                onClick={onButtonClicks}
                className="group flex gap-1 items-center font-primary"
            >
                <h6 className="font-medium duration-200 group-hover:scale-105">
                    {name}
                </h6>
                {dropdown && (
                    <Image
                        src="/icon/Vector.svg"
                        width={19}
                        height={11}
                        alt="vector logo"
                        className="duration-200 group-hover:scale-105"
                    />
                )}
            </button>
            {dropdown && active && (
                <div
                    className="absolute"
                    style={{
                        backgroundColor: "white",
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        borderRadius: 6,
                    }}
                >
                    {dropdownContent()}
                </div>
            )}
        </div>
    );
};

export default NavbarLinks;
