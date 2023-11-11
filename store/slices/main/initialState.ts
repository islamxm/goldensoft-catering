import type FetchDataStatusType from "@/models/FetchDataStatus";

export type MainSliceStateType = {
  isPageContentLoading: boolean,
  fetchPreDataStatus: FetchDataStatusType
}

const initialState:MainSliceStateType = {
  isPageContentLoading: false, //можно изменить название на более понятный
  fetchPreDataStatus: 'LOADING'
}

export default initialState;