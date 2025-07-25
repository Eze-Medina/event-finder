
export const format = (resp) => {
  
  const data = []

  for (let index = 0; index < resp.length; index++) {
    
    const date = new Date(resp[index].dates.start.localDate);
    const dateFormat = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);

    const timeFormat = resp[index].dates.start.localTime.slice(0, 5);

    data.push({
      name: resp[index].name,
      starDate: dateFormat,
      startTime: timeFormat,
      eventType: resp[index].classifications[0].segment.name,
      location: resp[index]._embedded.venues[0].name
    })
  
  }
  
  return data
}
