import { useWatchListContext } from '@/context/Movies'
import { useState } from 'react'
import { Button } from '../ui/button'

export const Recommend = () => {
  const [movieToWatch, setMovieToWatch] = useState<string>()
  const { watchList, getRandomMovieToWatch } = useWatchListContext()

  const handleRecommendation = () => {
    const movie = getRandomMovieToWatch()

    setMovieToWatch(movie)
  }

  return (
    <div className="mb-8 items-center justify-center flex flex-col">
      <h1 className="mb-8 text-5xl font-bold">{movieToWatch}</h1>
      <Button
        size="lg"
        onClick={handleRecommendation}
        disabled={watchList.length === 0}
      >
        {movieToWatch ? 'Não gostei, de novo!' : 'Quero uma recomendação ✨'}
      </Button>
    </div>
  )
}
