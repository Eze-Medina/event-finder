
export const filterEvent = async (page, category = 'Sports') => {

  try {
    const res = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_EVENT_API}&size=6&page=${page}&classificationName=${category}`);
    const json = await res.json();
    return json._embedded.events
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}
