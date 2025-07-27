import { filterEvent } from "../../../modules/events/helpers/filterEvent";
import { format } from "../../../modules/events/helpers/format";
import { getEvents } from "../../../modules/events/helpers/getEvents"
import { searchByName } from "../../../modules/events/helpers/searchByName";
import { alterPage, setEventList, setModalData, setPage, toggleModal } from "./eventSlice";


export const loadEvent = (page) => {
  return async(dispatch) => {
    const data = await getEvents(page);
    const dataFormar = format(data);
    dispatch(setEventList(dataFormar));
  }
}

export const chagenPage = (number) => {
  return async(dispatch) => {
    dispatch(alterPage(number));
  }
}

export const resetPage = () => {
  return async(dispatch) => {
    dispatch(setPage());
  }
}

export const searchEvent = (page, name) => {
  return async(dispatch) => {
    const data = await searchByName(page, name);
    const dataFormar = format(data);
    dispatch(setEventList(dataFormar));
  }
}

export const filterByCategory = (page, category) => {
  return async(dispatch) => {
    const data = await filterEvent(page, category);
    const dataFormar = format(data);
    dispatch(setEventList(dataFormar));
  }
}

export const showModal = () => {
  return (dispatch) => {
    dispatch(toggleModal());
  }
}

export const chageModalData = (data) => {
  return async(dispatch) => {
    dispatch(setModalData(data));
  }
}