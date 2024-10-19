// let's look for the example of fn overload
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
    return day === undefined || year === undefined ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day);
}

// simpler and cleaner
function createDateSimpler(monthOrTimestamp, day, year) : any {
    return day === undefined || year === undefined ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day);
}