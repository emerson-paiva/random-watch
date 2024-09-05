interface WatchItem {
  title: string
  watched: boolean
  type: 'movie' | 'series'
}

const getWatchList = (): WatchItem[] =>
  JSON.parse(localStorage.getItem('watchList') || '[]')

const setWatchList = (watchList: WatchItem[]) =>
  localStorage.setItem('watchList', JSON.stringify(watchList))

export const addToWatchList = (
  item: string,
  type: 'movie' | 'series'
): void => {
  const watchList: WatchItem[] = getWatchList()

  watchList.push({ title: item, watched: false, type })
  setWatchList(watchList)
}

export const toggleAsWatch = (title: string): void => {
  const watchList: WatchItem[] = getWatchList()

  const newWatchList = watchList.map((item: WatchItem) =>
    item.title === title ? { ...item, watched: !item.watched } : item
  )

  setWatchList(newWatchList)
}

export const getWatchListByType = (type: 'movie' | 'series'): WatchItem[] => {
  const watchList: WatchItem[] = getWatchList()

  return watchList.filter((item: WatchItem) => item.type === type)
}

export const getRandomUnwatched = (
  type: 'movie' | 'series'
): WatchItem | { error: string } => {
  let watchList: WatchItem[] = getWatchList().filter(
    (item: WatchItem) => !item.watched
  )

  if (type) {
    watchList = watchList.filter((item: WatchItem) => item.type === type)
  }

  if (watchList.length === 0)
    return {
      error: `Remove the filters or add more ${type}`,
    }

  const randomIndex = Math.floor(Math.random() * watchList.length)

  return watchList[randomIndex]
}
