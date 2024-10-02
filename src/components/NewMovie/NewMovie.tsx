import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useWatchListContext, MovieToAdd } from '@/context/Movies'
import { useState } from 'react'

export const NewMovieDialog = () => {
  const [movie, setMovie] = useState<MovieToAdd>({
    title: '',
    type: 'movie',
  })
  const { addMovie } = useWatchListContext()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="absolute rounded-full bottom-6 right-6"
          size="icon"
        >
          +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-description="New Movie">
        <DialogHeader>
          <DialogTitle>Cadastrar novo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Nome
            </Label>
            <Input
              id="title"
              className="col-span-3"
              required
              onChange={(evt) =>
                setMovie((currentData) => ({
                  ...currentData,
                  title: evt.target.value,
                }))
              }
              value={movie.title}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Tipo
            </Label>
            <Select
              name="type"
              onValueChange={(value) =>
                setMovie((currentData) => ({
                  ...currentData,
                  type: value as MovieToAdd['type'],
                }))
              }
              value={movie.type}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Filme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="movie" defaultChecked>
                  Filme
                </SelectItem>
                <SelectItem value="serie">Serie</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              onClick={() => addMovie(movie)}
              disabled={!movie.title}
            >
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
