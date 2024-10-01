import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { v4 as uuid } from 'uuid'

// const STORE_KEY = 'watchList'

export interface WatchItem {
  title: string
  watched: boolean
  type: 'movie' | 'series'
  uuid: string
}

export type MovieToAdd = Pick<WatchItem, 'type' | 'title'>

type WatchListContextType = {
  watchList: WatchItem[]
  addMovie: (movie: MovieToAdd) => void
  removeMovie: (movieId: string) => void
}

const initialValue: WatchItem[] = []

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

  useEffect(() => {
    console.log(watchList)
  }, [watchList])

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        addMovie,
        removeMovie,
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
