import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

import { useMemo } from "react";

const Map: React.FC = () => {
    const banjarLocation = useMemo(
        () => ({ lat: -6.320398919064967, lng: 106.93599245077186 }),
        []
    );
    const puraLocation = useMemo(
        () => ({ lat: -6.3033411434036974, lng: 106.89386777103617 }),
        []
    );
    const mapCenter = useMemo(() => ({ lat: -6.311783, lng: 106.909841 }), []);
    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: false,
            clickableIcons: false,
            scrollwheel: false,
        }),
        []
    );
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCbQuPVOtyb5-wKv9ctQFK2-4PZJ5d5L78",
    });
    if (!isLoaded) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <GoogleMap
                options={mapOptions}
                zoom={14}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: "751px", height: "367px" }}
            >
                <MarkerF position={banjarLocation} />
                <MarkerF position={puraLocation} />
            </GoogleMap>
        </>
    );
};

export default Map;
