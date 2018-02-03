export const startTimeRate = (startTime, bedtime) => {
    let hoursWorked = bedtime - startTime;
    return 12 * hoursWorked;
}