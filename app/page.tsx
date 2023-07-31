"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import bg1 from "./asset/tari_pura.jpeg";
import bg2 from "./asset/pasramanCover.jpeg";
import polengbg from "./asset/polengbg.jpg";
import qr from "./asset/324672.png";
import MainProfileCard from "./component/MainProfileCard";
import VisiMisiCard from "./component/VisiMisiCard";
import pura from "./asset/pura.jpeg";
import banjar from "./asset/banjar.jpeg";
import organisasi from "./asset/organisasi.jpeg";
import * as content from "./asset/content/home";
import dynamic from "next/dynamic";
import Map from "./component/Map";
import temple from "./asset/map_hindu-temple.svg";
import school from "./asset/teenyicons_school-outline.svg";
import ArtikelCard from "./component/ArtikelCard";
import Galeri from "./component/Galeri";

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
        <div className="flex flex-col items-center" style={{ width: "655px" }}>
          <p>
            Perolehlah kekayaan melalui jalan Dharma dengan Seratus Tanganmu,
            dan Dermakanlah itu dengan kemurahan hati dengan Seribu Tanganmu
          </p>
          <p>
            Sata hasta sama hara sahasrahata sam kira (Atharva Veda III.2.4.5)
          </p>
        </div>
      </div>

      {/* VISI MISI NILAI */}
      <div style={{ marginTop: "200px" }}>
        <VisiMisiCard
          image={bg1}
          title="VISI"
          content="visi"
          hCard={334}
          hContent={305}
        />
        <VisiMisiCard
          image={bg2}
          title="MISI"
          content="misi"
          hCard={487}
          hContent={457}
        />
        <VisiMisiCard
          image={bg1}
          title="NILAI-GUYUB"
          content="nilai"
          hCard={334}
          hContent={305}
        />
      </div>

      {/* MAIN PROFILE SECTION */}
      <div className="flex flex-col" style={{ marginTop: "200px" }}>
        <MainProfileCard
          image={pura}
          title="PURA"
          subtitle="Penataran Agung Kertha Bumi"
          text={content.pura}
          left={true}
        />
        <MainProfileCard
          image={banjar}
          title="BANJAR"
          subtitle="Banjar Hitakarma Pondok Gede"
          text={content.pura}
          left={false}
        />
        <MainProfileCard
          image={organisasi}
          title="ORGANISASI"
          subtitle="Perkumpulan Masyarakat Hindu"
          text={content.organisasi}
          left
        />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vestibulum arcu in mauris viverra aliquet vitae et arcu. Nulla
              facilisi. Praesent a massa semper est aliquam rhoncus.
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
      <div
        className="flex gap-10 items-center justify-center"
        style={{ marginTop: "142px" }}
      >
        <Map />
        <div className="flex flex-col gap-5">
          <a href="https://goo.gl/maps/c6XSbC2BWzoKhmVq8" target="_blank">
            <div className="flex gap-5 items-center">
              <Image src={temple} alt="Pura" height={50} width={50} />
              <h5>Pura Penataran Agung Kertha Bumi</h5>
            </div>
          </a>
          <a href="https://goo.gl/maps/JYmuDp49q31XtjEw5" target="_blank">
            <div className="flex gap-5 items-center">
              <Image src={school} alt="Pura" height={50} width={50} />
              <h5>Pura Penataran Agung Kertha Bumi</h5>
            </div>
          </a>
        </div>
      </div>
      {/* KEGIATAN SECTION */}

      <div style={{ marginTop: "142px" }}>
        <div className="text-center">
          <h1 className="text-extrabold">KEGIATAN</h1>
          <h5>Beberapa Kegiatan Yang Dilakukan Di Banjar Kami</h5>
        </div>
        <div
          className="flex flex-row justify-around"
          style={{ padding: "0 150px 0 150px", marginTop: 58 }}
        >
          <ArtikelCard
            image={bg2}
            title="Pemilihan Calon Ketua Banjar Hitakarma Pondok Gede Periode 2023-2026"
            author="Ketut Dobleh"
            timestamp="5 Jun 2023"
            content={content.banjar}
          />

          <ArtikelCard
            image={bg2}
            title="Pemilihan Calon Ketua Banjar Hitakarma Pondok Gede Periode 2023-2026"
            author="Ketut Dobleh"
            timestamp="5 Jun 2023"
            content={content.banjar}
          />
          <ArtikelCard
            image={bg2}
            title="Pemilihan Calon Ketua Banjar Hitakarma Pondok Gede Periode 2023-2026"
            author="Ketut Dobleh"
            timestamp="5 Jun 2023"
            content={content.banjar}
          />
        </div>
      </div>
      {/* GALERI */}
      <div style={{ marginTop: 142 }}>
        <div className="text-center pb-16">
          <h1 className="text-extrabold">GALERI</h1>
          <h5>Dokumentasi dari rangakaian aktifitas anggota banjar</h5>
        </div>
        <Galeri />
      </div>

      {/* DANA PUNIA */}
      <div
        className="flex justify-center items-center gap-16"
        style={{
          marginTop: 142,
          position: "relative",
          width: "100%",
          height: 620,
          borderTop: "6px solid #000",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(196, 196, 196, 0.2)",
            zIndex: -1,
            width: "100%",
            height: "100%",
          }}
        />
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(154, 0, 0, 0.80)",
            zIndex: -2,
            width: "100%",
            height: "100%",
          }}
        />
        <Image
          src={polengbg}
          alt="background poleng"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -40,
          }}
        />
        <div style={{ height: 485, width: 545, position: "relative" }}>
          <Image
            src={qr}
            fill
            alt="qr"
            sizes="100vw"
            style={{
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </div>
        <div
          className="flex flex-col justify-between justify-items-center items-center"
          style={{ color: "white", width: 623, height: 475 }}
        >
          <h1>DANA PUNIA</h1>
          <h5 style={{ height: 187 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
            consectetur ante, quis convallis urna. Nunc vel odio neque. Donec
            eget varius diam, sit amet tempus augue. Donec lectus quam, laoreet
            eu ante vel, aliquet bibendum felis. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
          </h5>
          <button className="main">Donasi</button>
        </div>
      </div>
    </div>
  );
}
