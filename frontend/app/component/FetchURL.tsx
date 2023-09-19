export const FetchURL = () => {
    if (process.env.NODE_ENV === "production") {
        return "18.170.117.198/api";
    } else {
        return "127.0.0.1:8000";
    }
};
