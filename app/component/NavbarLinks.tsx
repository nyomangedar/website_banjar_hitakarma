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
            <>
                <ul className="list-none">
                    {links?.map((data) => (
                        <li className="mb-2">
                            <a href={data[1]} className="font-primary">
                                <h6>{data[0]}</h6>
                            </a>
                        </li>
                    ))}
                </ul>
            </>
        );
    };
    return (
        <div>
            <button
                onClick={onButtonClicks}
                className="flex gap-1 items-center font-primary"
            >
                <h5 className="font-medium">{name}</h5>{" "}
                {dropdown && (
                    <Image
                        src="/icon/Vector.svg"
                        width={19}
                        height={11}
                        alt="vector logo"
                    />
                )}
            </button>
            {dropdown && active && (
                <div
                    className="absolute"
                    style={{
                        backgroundColor: "white",
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        padding: 10,
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
