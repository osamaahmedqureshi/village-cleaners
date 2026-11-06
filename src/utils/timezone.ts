/**
 * Utility to calculate real-time business open/closed status in America/Chicago timezone.
 * Hours:
 * Monday-Friday: 7:00 AM - 6:00 PM (07:00 - 18:00)
 * Saturday: 8:00 AM - 4:00 PM (08:00 - 16:00)
 * Sunday: Closed
 */

export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  currentLocalTime: string;
}

export function getStoreStatus(customDate?: Date): StoreStatus {
  const now = customDate || new Date();

  // Format to America/Chicago parts
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  let weekday = '';
  let hour = 0;
  let minute = 0;

  for (const part of parts) {
    if (part.type === 'weekday') weekday = part.value;
    if (part.type === 'hour') hour = parseInt(part.value, 10);
    if (part.type === 'minute') minute = parseInt(part.value, 10);
  }

  // Display time in 12h format for Central Time
  const timeDisplayFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const currentLocalTime = timeDisplayFormatter.format(now);

  const currentMinutes = hour * 60 + minute;

  // Schedule definitions in minutes from midnight
  const weekdayOpen = 7 * 60;   // 07:00 AM
  const weekdayClose = 18 * 60; // 06:00 PM
  const saturdayOpen = 8 * 60;  // 08:00 AM
  const saturdayClose = 16 * 60;// 04:00 PM

  if (weekday === 'Sun') {
    return {
      isOpen: false,
      statusText: 'Closed Today',
      subText: 'Opens Monday at 7:00 AM',
      currentLocalTime,
    };
  }

  if (weekday === 'Sat') {
    if (currentMinutes >= saturdayOpen && currentMinutes < saturdayClose) {
      const remainingMin = saturdayClose - currentMinutes;
      const hoursLeft = Math.floor(remainingMin / 60);
      const minsLeft = remainingMin % 60;
      const closeMsg = hoursLeft > 0 ? `Closing in ${hoursLeft}h ${minsLeft}m` : `Closing in ${minsLeft}m`;
      return {
        isOpen: true,
        statusText: 'Open Today until 4:00 PM',
        subText: closeMsg,
        currentLocalTime,
      };
    } else if (currentMinutes < saturdayOpen) {
      return {
        isOpen: false,
        statusText: 'Closed Now',
        subText: 'Opens today at 8:00 AM',
        currentLocalTime,
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Closed for the day',
        subText: 'Opens Monday at 7:00 AM',
        currentLocalTime,
      };
    }
  }

  // Monday through Friday
  if (currentMinutes >= weekdayOpen && currentMinutes < weekdayClose) {
    return {
      isOpen: true,
      statusText: 'Open Today until 6:00 PM',
      subText: 'Acklen Ave counter open for drop-off & pickup',
      currentLocalTime,
    };
  } else if (currentMinutes < weekdayOpen) {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      subText: 'Opens today at 7:00 AM',
      currentLocalTime,
    };
  } else {
    // After 6 PM on weekday
    const nextDayText = weekday === 'Fri' ? 'Opens Saturday at 8:00 AM' : 'Opens tomorrow at 7:00 AM';
    return {
      isOpen: false,
      statusText: 'Closed for the evening',
      subText: nextDayText,
      currentLocalTime,
    };
  }
}
