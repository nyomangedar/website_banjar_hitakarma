export const FetchURL = () => {
    if (process.env.NODE_ENV === "production") {
        return process.env.HOSTNAME;
    } else {
        return "localhost";
    }
};
