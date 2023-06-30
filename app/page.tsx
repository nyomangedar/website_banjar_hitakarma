"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import bg1 from "./asset/tari_pura.jpeg";
import bg2 from "./asset/pasramanCover.jpeg";
import MainProfileCard from "./component/MainProfileCard";
import pura from "./asset/pura.jpeg";
import banjar from "./asset/banjar.jpeg";
import organisasi from "./asset/organisasi.jpeg";
import * as content from "./asset/content/home";
import dynamic from "next/dynamic";

export default function Home() {
    const ReactPlayer = dynamic(() => import("react-player/lazy"), {
        ssr: false,
    });
    return (
        <div>
            {/* Landing Cover */}
            <div className={styles.landingCover}>
                <Image
                    alt="tari di pura"
                    src={bg1}
                    // sizes="100vw"
                    sizes="100vw"
                    fill
                    style={{
                        objectFit: "cover",
                        zIndex: -1,
                        filter: "brightness(0.5)",
                    }}
                />
                <div className="flex flex-col items-center text-center pt-16">
                    <h1 style={{ maxWidth: "1100px" }}>
                        SUKA DUKA HINDU DHARMA BANJAR HITAKRMA - PONDOK GEDE
                    </h1>
                    <h4>Maju Bersama Dalam Nuansi Harmoni Menuju Dharma</h4>
                </div>
            </div>

            {/* OM SWASTYASTU */}
            <div
                className="flex flex-col items-center text-center"
                style={{ marginTop: "224px" }}
            >
                <h1>OM SWASTYASTU</h1>
                <div
                    className="flex flex-col items-center"
                    style={{ width: "655px" }}
                >
                    <p>
                        Perolehlah kekayaan melalui jalan Dharma dengan Seratus
                        Tanganmu, dan Dermakanlah itu dengan kemurahan hati
                        dengan Seribu Tanganmu
                    </p>
                    <p>
                        Sata hasta sama hara sahasrahata sam kira (Atharva Veda
                        III.2.4.5)
                    </p>
                </div>
            </div>

            {/* MAIN PROFILE SECTION */}
            <div className="flex flex-col" style={{ marginTop: "200px" }}>
                {MainProfileCard(
                    pura,
                    "PURA",
                    "Penataran Agung Kertha Bumi",
                    content.pura
                )}
                {MainProfileCard(
                    banjar,
                    "BANJAR",
                    "Banjar Hitakarma Pondok Gede",
                    content.pura,
                    false
                )}
                {MainProfileCard(
                    organisasi,
                    "ORGANISASI",
                    "Perkumpulan Masyarakat Hindu di Jakarta",
                    content.pura
                )}
            </div>

            {/* PASRAMAN COVER */}
            <div className={styles.pasramanCover}>
                <Image
                    alt="pasraman"
                    src={bg2}
                    // sizes="100vw"
                    sizes="100vw"
                    fill
                    style={{
                        objectFit: "cover",
                        zIndex: -1,
                        filter: "brightness(0.4)",
                    }}
                />
                <div className="flex gap-10">
                    <div
                        className="flex flex-col text-center items-center gap-7"
                        style={{ maxWidth: "584px" }}
                    >
                        <h2 className="font-bold">Pasraman Purna Lingga</h2>
                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam vestibulum arcu in mauris viverra
                            aliquet vitae et arcu. Nulla facilisi. Praesent a
                            massa semper est aliquam rhoncus.
                        </h5>
                        <button className="main">Read More</button>
                    </div>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=A795a4xzkwM&ab_channel=Mr.AlitChannel"
                        width={566}
                        height={330}
                    />
                </div>
            </div>
            {/* MAP */}
            {/* KEGIATAN SECTION */}
            {/* DANA PUNIA */}
        </div>
    );
}
