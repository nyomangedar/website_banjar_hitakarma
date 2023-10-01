import Link from "next/link";

type Breadcrumb = {
    path: string[];
    links: string[];
};

const Breadcrumb: React.FC<Breadcrumb> = ({ path, links }) => {
    const breadcrumb = path.map((data, index: number) => {
        if (index === path.length - 1) {
            const link = <span>{data}</span>;
            return link;
        }
        const link = (
            <Link
                style={{ color: "#9A0000" }}
                className="underline"
                href={links[index]}
            >
                {data}
            </Link>
        );
        return <span>{link} / </span>;
    });

    return <span>{breadcrumb}</span>;
};

export default Breadcrumb;
