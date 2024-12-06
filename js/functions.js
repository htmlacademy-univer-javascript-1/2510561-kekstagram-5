function isMeetingValid(startTime, endTime, meetingStart, meetingDuration) {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStart = timeToMinutes(startTime);
  const workEnd = timeToMinutes(endTime);
  const meetingStartTime = timeToMinutes(meetingStart);
  const meetingEndTime = meetingStartTime + meetingDuration;

  return meetingStartTime >= workStart && meetingEndTime <= workEnd;
}

isMeetingValid('08:00', '17:30', '14:00', 90);
isMeetingValid('8:0', '10:0', '8:0', 120);
isMeetingValid('08:00', '14:30', '14:00', 90);
isMeetingValid('14:00', '17:30', '08:0', 90);
isMeetingValid('8:00', '17:30', '08:00', 900);
