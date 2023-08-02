"use client";
import styles from "../styles.module.css";
import Image from "next/image";
import polengbg from "../asset/polengbg.jpg";
import bg1 from "../asset/tari_pura.jpeg";
import bg2 from "../asset/pasramanCover.jpeg";
import banjarImg from "../asset/banjar-cover.jpg";
import managementImg from "../asset/management.png";
import sejarahImg from "../asset/sejarah.png";
import TridatuDivider from "../component/TridatuDIvider";
import programImg from "../asset/prasasti-programkerja.jpg";
import { useState } from "react";
import ReadMore from "../component/ReadMore";
import ProfileCard from "../component/ProfileCard";
import ArtikelCard from "..//component/ArtikelCard";
import Galeri from "../component/Galeri";
import * as content from "../asset/content/home";

export default function Banjar() {
  const management = [
    {
      id: 1,
      image: managementImg,
      name: "Ida Made agung mangku pastika",
      title: "Wakil Keedua",
    },
    {
      id: 2,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Ketua Banjar",
    },
    {
      id: 3,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Wakil Ketua II",
    },
    {
      id: 4,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Sekretaris I",
    },
    {
      id: 5,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Bendhara I",
    },
    {
      id: 6,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Humas I",
    },
    {
      id: 7,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Sekretaris II",
    },
    {
      id: 8,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Bendhara II",
    },
    {
      id: 9,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Humas II",
    },
  ];
  const bidang = [
    {
      id: 1,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Ketua Bidang I",
    },
    {
      id: 2,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Ketua Bidang II",
    },
    {
      id: 3,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Ketua Bidang III",
    },
    {
      id: 3,
      image: managementImg,
      name: "Prof. Dr. Anak Agung Dobleh Gede Karangasem",
      title: "Ketua Bidang IV",
    },
  ];
  return (
    <div className="mb-40 mt-[80px]">
      {/* <h1 className="text-5xl ml-20 mb-10">Banjar</h1> */}
      {/* Landing Cover */}
      <div className="relative min-h-[710px]">
        <div className="absolute bg-red-500 opacity-50 w-full min-h-[710px] z-10" />
        <Image
          alt="tari di pura"
          src={polengbg}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
            zIndex: -1,
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {/* flex container */}
          <Image
            alt="overlay image"
            src={banjarImg} // replace this with your actual image source
            className="max-w max-h-[900px] object-cover" // 50% of the parent's width and height
          />
        </div>
      </div>
      <TridatuDivider />
      <div className="mx-[150px] mt-10">
        <h1 className="text-4xl">Banjar Hitakarma Pondok Gede</h1>
        <h4 className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac aliquam
          purus. Suspendisse lacinia, elit ut maximus lobortis, ligula dui
          egestas velit, id aliquam magna quam ut felis. Aliquam finibus augue
          mauris, vitae pulvinar augue hendrerit ac. Cras ullamcorper maximus
          purus at sodales. Aenean iaculis enim urna, vestibulum bibendum turpis
          ullamcorper at. Integer eu nulla pretium, tempor ipsum et, tempor
          velit. Nam cursus rhoncus ex vitae accumsan. Proin a lacus tincidunt,
          viverra augue vitae, sagittis lorem. Pellentesque in imperdiet tellus,
          vel tristique nulla.
        </h4>
        <h1 className="mt-20 text-4xl">Sejarah</h1>
        <h4 className="mt-10">2000</h4>
        <h4 className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac aliquam
          purus. Suspendisse lacinia, elit ut maximus lobortis, ligula dui
          egestas velit, id aliquam magna quam ut felis. Aliquam finibus augue
          mauris, vitae pulvinar augue hendrerit ac. Cras ullamcorper maximus
          purus at sodales. Aenean iaculis enim urna, vestibulum bibendum turpis
          ullamcorper at. Integer eu nulla pretium, tempor ipsum et, tempor
          velit.
        </h4>
        <div className="flex justify-center mt-10">
          <Image alt="sejarah" src={sejarahImg} />
        </div>
        <h4 className="mt-10">2003</h4>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac aliquam
          purus. Suspendisse lacinia, elit ut maximus lobortis, ligula dui
          egestas velit, id aliquam magna quam ut felis. Aliquam finibus augue
          mauris, vitae pulvinar augue hendrerit ac. Cras ullamcorper maximus
          purus at sodales. Aenean iaculis enim urna, vestibulum bibendum turpis
          ullamcorper at. Integer eu nulla pretium, tempor ipsum et, tempor
          velit.
        </p>
        <div className="flex justify-center mt-10">
          <Image
            alt="sejarah"
            src={sejarahImg}
            className="mx-10"
            width={500}
            height={300}
          />
          <Image
            alt="sejarah"
            src={sejarahImg}
            className="mx-10"
            width={500}
            height={300}
          />
        </div>
        <h1 className="mt-20 text-4xl">Yayasan</h1>
        <ReadMore>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac aliquam
          purus. Suspendisse lacinia, elit ut maximus lobortis, ligula dui
          egestas velit, id aliquam magna quam ut felis. Aliquam finibus augue
          mauris, vitae pulvinar augue hendrerit ac. Cras ullamcorper maximus
          purus at sodales. Aenean iaculis enim urna, vestibulum bibendum turpis
          ullamcorper at. Integer eu nulla pretium, tempor ipsum et, tempor
          velit.Nam cursus rhoncus ex vitae accumsan. Proin a lacus tincidunt,
          viverra augue vitae, sagittis lorem. Pellentesque in imperdiet tellus,
          vel tristique nulla.
        </ReadMore>
        <h1 className="mt-20 text-4xl">Pasraman</h1>
        <ReadMore>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac aliquam
          purus. Suspendisse lacinia, elit ut maximus lobortis, ligula dui
          egestas velit, id aliquam magna quam ut felis. Aliquam finibus augue
          mauris, vitae pulvinar augue hendrerit ac. Cras ullamcorper maximus
          purus at sodales. Aenean iaculis enim urna, vestibulum bibendum turpis
          ullamcorper at. Integer eu nulla pretium, tempor ipsum et, tempor
          velit.Nam cursus rhoncus ex vitae accumsan. Proin a lacus tincidunt,
          viverra augue vitae, sagittis lorem. Pellentesque in imperdiet tellus,
          vel tristique nulla.
        </ReadMore>
        <h1 className="mt-20 text-4xl">Kepengurusan</h1>
        <h2 className="mt-5 text-4xl">Periode 2023 - 2026</h2>
        <ReadMore>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac aliquam
          purus. Suspendisse lacinia, elit ut maximus lobortis, ligula dui
          egestas velit, id aliquam magna quam ut felis. Aliquam finibus augue
          mauris, vitae pulvinar augue hendrerit ac. Cras ullamcorper maximus
          purus at sodales. Aenean iaculis enim urna, vestibulum bibendum turpis
          ullamcorper at. Integer eu nulla pretium, tempor ipsum et, tempor
          velit.Nam cursus rhoncus ex vitae accumsan. Proin a lacus tincidunt,
          viverra augue vitae, sagittis lorem. Pellentesque in imperdiet tellus,
          vel tristique nulla.
        </ReadMore>
        <div className="mt-10 grid grid-cols-3 gap-x-[240px] gap-y-8 justify-center items-center">
          {management.map((person) => (
            <ProfileCard
              key={person.id}
              image={person.image}
              jobTitle={person.title}
              name={person.name}
            />
          ))}
        </div>
        <div className="mt-10 grid grid-cols-4 gap-20">
          {bidang.map((person) => (
            <ProfileCard
              key={person.id}
              image={person.image}
              jobTitle={person.title}
              name={person.name}
            />
          ))}
        </div>
        <h1 className="mt-20 text-4xl">Program Kerja</h1>
        <ReadMore>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac aliquam
          purus. Suspendisse lacinia, elit ut maximus lobortis, ligula dui
          egestas velit, id aliquam magna quam ut felis. Aliquam finibus augue
          mauris, vitae pulvinar augue hendrerit ac. Cras ullamcorper maximus
          purus at sodales. Aenean iaculis enim urna, vestibulum bibendum turpis
          ullamcorper at. Integer eu nulla pretium, tempor ipsum et, tempor
          velit.Nam cursus rhoncus ex vitae accumsan. Proin a lacus tincidunt,
          viverra augue vitae, sagittis lorem. Pellentesque in imperdiet tellus,
          vel tristique nulla.
        </ReadMore>
        <div className="mx-auto flex mt-20 max-w-screen-sm items-center justify-center">
          <div className="h-70 w-full rounded-md bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 p-2">
            <Image alt="program kerja" src={programImg} />
          </div>
        </div>
        {/* KEGIATAN SECTION */}

        <div style={{ marginTop: "142px" }}>
          <div className="text-center">
            <h1 className="text-extrabold">KEGIATAN</h1>
            <h5>Beberapa Kegiatan Yang Dilakukan Di Banjar Kami</h5>
          </div>
          <div
            className="flex flex-row justify-around gap-7"
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
      </div>
    </div>
  );
}
