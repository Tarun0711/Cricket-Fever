export const formatUnixTimestamp = (
    unixTimestamp,
    {
      locale = 'en-IN',
      timeZone = 'Asia/Kolkata',
      hour12 = false,
    } = {}
  ) => {
    const date = new Date(unixTimestamp * 1000);
  
    return date.toLocaleString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12,
      timeZone,
    });
  };
  