export default function formatDate(date) {
    const monthNames = 
    [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var day = new Date().getDate(date);
    var monthIndex = new Date().getMonth(date);
    var year = new Date().getFullYear(date);

    return `${day} ${monthNames[monthIndex]} ${year}`;

}