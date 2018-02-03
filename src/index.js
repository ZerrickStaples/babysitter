export const startTimeRate = (startTime, bedtime) => {
    if(startTime < 5) {
        startTime = 5;
    }

    let hoursWorked = bedtime - startTime;

    return 12 * hoursWorked;
}

export const bedtimeRate = () => {
    return 8;
}