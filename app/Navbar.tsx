"use client";

import Image from "next/image";
import logo from "./asset/logo.png";
import vector from "./asset/Vector.svg";
import NavbarLinks from "./component/NavbarLinks";
import { useRef, useState, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function Navbar() {
    const [dropdownActive, setdropdown] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const dropdownRef = useRef(null);
    const activateDropdown = (index: number) => {
        let state = [false, false, false, false, false];
        if (index >= 0) {
            state[index] = true;
        }
        setdropdown(state);
        console.log({ dropdownActive });
    };

    const handleClickOutside = () => {
        activateDropdown(-1);
    };
    useOnClickOutside(dropdownRef, handleClickOutside);
    return (
        <nav className="relative">
            <div className="fixed top-0 left-0 right-0 z-[999]">
                <div
                    className="flex items-center place-content-between white h-36"
                    style={{
                        color: "black",
                        backgroundColor: "white",
                        padding: "0 100px 0 100px",
                    }}
                >
                    <Image src={logo} width={123} height={123} alt="logo" />
                    <div className="flex items-center gap-7" ref={dropdownRef}>
                        <NavbarLinks
                            name="BANJAR"
                            active={dropdownActive[0]}
                            dropdown={true}
                            links={[
                                [
                                    "Banjar Hitakarma Pondok Gede",
                                    "banjarHitakarma",
                                ],
                                ["Banjar Jabodetabek", "banjarJabodetabek"],
                                ["Yayasan Banjar Hitakarma", "yayasan"],
                                ["Pasraman Purna Lingga", "pasraman"],
                            ]}
                            onButtonClicks={() => activateDropdown(0)}
                        />
                        <NavbarLinks name="PURA" />
                        <NavbarLinks
                            name="ORGANISASI"
                            active={dropdownActive[2]}
                            dropdown={true}
                            links={[
                                ["PWHD", "pwhd"],
                                ["PPHD", "pphd"],
                            ]}
                            onButtonClicks={() => activateDropdown(2)}
                        />
                        <NavbarLinks
                            name="EVENT"
                            active={dropdownActive[3]}
                            dropdown={true}
                            links={[
                                ["Agenda", "agenda"],
                                ["Artikel", "artikel"],
                            ]}
                            onButtonClicks={() => activateDropdown(3)}
                        />
                        <NavbarLinks
                            name="KONTAK"
                            active={dropdownActive[4]}
                            dropdown={true}
                            links={[
                                ["Alamant dan Kontak", "alamat"],
                                ["Donasi", "donasi"],
                                ["FAQ", "faq"],
                            ]}
                            onButtonClicks={() => activateDropdown(4)}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
