const QuickMonth = {
    "01": "JAN",
    "02": "FEB",
    "03": "MAR",
    "04": "APR",
    "05": "MAY",
    "06": "JUN",
    "07": "JUL",
    "08": "AUG",
    "09": "SEP",
    "10": "OCT",
    "11": "NOV",
    "12": "DEC",
};

export const BreakdownISODate = (date: string) => {
    const splitDate = date.split("T")[0].split("-");
    const year = splitDate[0];
    const monthLong = splitDate[1];
    const day = splitDate[2];
    type MonthKey = keyof typeof QuickMonth;
    const month = QuickMonth[monthLong as MonthKey];
    return { year, month, day };
};
