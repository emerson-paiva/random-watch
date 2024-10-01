export interface WatchItem {
  title: string
  watched: boolean
  type: 'movie' | 'series'
  uuid: string
}

const STORE_KEY = 'watchList'

export const getWatchList = (): WatchItem[] =>
  JSON.parse(localStorage.getItem(STORE_KEY) || '[]')

export const setWatchList = (watchList: WatchItem[]) =>
  localStorage.setItem(STORE_KEY, JSON.stringify(watchList))
