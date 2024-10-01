import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { v4 as uuid } from 'uuid'
import * as watchListStorage from '@/store/watchList'
import { type WatchItem } from '@/store/watchList'

export type MovieToAdd = Pick<WatchItem, 'type' | 'title'>

type WatchListContextType = {
  watchList: WatchItem[]
  addMovie: (movie: MovieToAdd) => void
  removeMovie: (movieId: string) => void
  toggleAsWatch: (movieId: string) => void
  getRandomMovieToWatch: (type?: WatchItem['type']) => string
}

const initialValue: WatchItem[] = watchListStorage.getWatchList()

const WatchListContext = createContext<WatchListContextType | null>(null)

export const WatchListProvider = ({ children }: PropsWithChildren) => {
  const [watchList, setWatchList] = useState(initialValue)

  const addMovie = ({ title, type = 'movie' }: MovieToAdd) =>
    setWatchList((movies) => [
      ...movies,
      {
        title,
        type,
        uuid: uuid(),
        watched: false,
      },
    ])

  const removeMovie = (uuid: string) =>
    setWatchList((movies) => movies.filter((movie) => movie.uuid !== uuid))

  const toggleAsWatch = (uuid: string) =>
    setWatchList((movies) =>
      movies.map((movie) => ({
        ...movie,
        watched: movie.uuid === uuid ? !movie.watched : movie.watched,
      }))
    )

  const getRandomMovieToWatch = (type?: 'movie' | 'series') => {
    const itemsToWatch = watchList.filter(
      (item: WatchItem) => !item.watched && (type ? item.type === type : true)
    )

    if (itemsToWatch.length === 0)
      return `Remove the filters or add more ${type}`

    const randomIndex = Math.floor(Math.random() * itemsToWatch.length)

    return itemsToWatch[randomIndex].title
  }

  useEffect(() => {
    watchListStorage.setWatchList(watchList)
  }, [watchList])

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        addMovie,
        removeMovie,
        toggleAsWatch,
        getRandomMovieToWatch,
      }}
    >
      {children}
    </WatchListContext.Provider>
  )
}

export const useWatchListContext = () => {
  const context = useContext(WatchListContext)

  if (!context) {
    throw new Error(
      'useWatchListContext should be used inside WatchListProvider'
    )
  }

  return context
}
