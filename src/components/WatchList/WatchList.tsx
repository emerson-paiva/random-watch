import { useWatchListContext } from '@/context/Movies'

export const WatchList = () => {
  const { watchList } = useWatchListContext()

  return (
    <ul>
      {watchList.map((movie) => (
        <li key={movie.uuid}>
          {movie.title} | {movie.type}
        </li>
      ))}
    </ul>
  )
}
