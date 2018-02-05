export const startTimeRate = (startTime, bedtime) => {
    if(startTime < 5) {
        startTime = 5;
    }

    let hoursWorked = bedtime - startTime;

    return 12 * hoursWorked;
}

export const bedtimeRate = (bedtime, midnight) => {
    let hoursWorked = midnight - bedtime;

    return 8 * hoursWorked;
}

export const endTimeRate = (midnight, endTime) => {
    midnight = 0;
    if(endTime > 4) {
        endTime = 4;
    }
    let hoursWorked = endTime - midnight;

    return 16 * hoursWorked;
}