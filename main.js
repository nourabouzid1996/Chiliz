/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 * 
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
    const calculateDiff = (start, end) => {
        const diffTime = Math.abs(end - start);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    const [startDate, endDate] = dates.map(date => {
        const [day, month, year] = date.split(".").map(Number);
        return new Date(year, month - 1, day);
    });

    const diffDays = calculateDiff(startDate, endDate);
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);

    const result = `${years ? `${years} year${years > 1 ? 's' : ''},` : ''}${(months > 0 && diffDays >= 31 ) ? `${years ? ` ` : ``}${months} month${months > 1 ? 's' : ''},` : ''}${(years !== 0 || (months > 0 && diffDays >= 31)) ? ` ` : ``}total ${diffDays} days`;
    //console.log(result)

    return  result;
}