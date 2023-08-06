const AgendaMiniCard: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center gap-2"
            style={{ width: 366, height: 195, backgroundColor: "#F0F0F0" }}
        >
            <div
                style={{
                    width: 99,
                    height: 120,
                    backgroundColor: "#9A0000",
                    color: "white",
                }}
                className="flex flex-col justify-around text-center"
            >
                <h6 className="font-extrabold">18 Maret</h6>
                <h6 className="font-extrabold">2023</h6>
            </div>
            <h6 style={{ width: 203 }}>
                Sembahyang Ngiring Pekuluh: Pura Ciangsana
            </h6>
        </div>
    );
};

export default AgendaMiniCard;
