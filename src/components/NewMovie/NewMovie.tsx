import { Button } from '@/components/ui/button'
import {
  Dialog,
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

export const NewMovieDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant="default"
        className="absolute rounded-full bottom-4 right-4"
        size="icon"
      >
        +
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Cadastrar novo</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="movie-name" className="text-right">
            Nome
          </Label>
          <Input id="movie-name" className="col-span-3" required />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Tipo
          </Label>
          <Select>
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
        <Button type="submit">Salvar</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)
