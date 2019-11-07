export default function formateDate(date) {
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

    var day = new Date(date).getDate();
    var monthIndex = new Date(date).getMonth();
    var year = new Date(date).getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;

}