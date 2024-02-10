export const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  export const filterUpcomingEvents = (events) => {
    return events.filter(event => new Date(event.date) >= new Date());
  };
  
