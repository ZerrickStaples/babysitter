let hoursWorked;

export const startTimeRate = (startTime, bedtime) => {
  let isStartTimeBefore5PM = Boolean(startTime < 5);

  if (isStartTimeBefore5PM) {
    startTime = 5;
  }

  hoursWorked = bedtime - startTime;

  return 12 * hoursWorked;
};

export const bedtimeRate = (bedtime, midnight) => {
  hoursWorked = midnight - bedtime;

  return 8 * hoursWorked;
};

export const endTimeRate = (midnight, endTime) => {
  let isEndTimeAfter4AM = Boolean(endTime > 4);

  if (midnight == endTime) {
    hoursWorked = 0;
  } else if (isEndTimeAfter4AM) {
    endTime = 4;
    hoursWorked = endTime;
  } else {
    hoursWorked = endTime - 0;
  }

  return 16 * hoursWorked;
};

export const calculateTotalPay = (startTime, bedtime, midnight, endTime) => {
  return (
    startTimeRate(startTime, bedtime) +
    bedtimeRate(bedtime, midnight) +
    endTimeRate(midnight, endTime)
  );
};
