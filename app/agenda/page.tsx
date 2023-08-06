import AgendaMainCard from "../component/AgendaMainCard";
import AgendaBulanIni from "./AgendaBulanIni";
import AgendaLewat from "./AgendaLewat";
import ArtikelCard from "../component/ArtikelCard";
import bg2 from "../asset/pasramanCover.jpeg";
import * as content from "../asset/content/home";

const Agenda = () => {
    return (
        <div style={{ marginTop: 224, padding: "0 150px 0 150px" }}>
            <h1>AGENDA</h1>

            <div className="flex flex-col gap-10">
                <h4>AGENDA TERDEKAT</h4>
                <AgendaMainCard />
                <h4>AGENDA BULAN INI</h4>
                <AgendaBulanIni />
                <h4>AGENDA YANG SUDAH LEWAT</h4>
                <AgendaLewat />
                <h4>Blog Kegiatan</h4>
                <div className="flex flex-row justify-between">
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
        </div>
    );
};

export default Agenda;
