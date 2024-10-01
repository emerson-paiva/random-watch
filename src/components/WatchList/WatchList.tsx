import { useWatchListContext } from '@/context/Movies'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '../ui/checkbox'

export function WatchList() {
  const { watchList, toggleAsWatch } = useWatchListContext()

  return (
    <Table>
      <TableCaption>
        {watchList.length > 0
          ? 'Filmes e Séries para aproveitar :)'
          : 'Nenhum filme ou série para aproveitar :('}{' '}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[20px]">Status</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead className="w-[100px]">Tipo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {watchList.map((movie) => (
          <TableRow
            key={movie.uuid}
            className="cursor-pointer"
            onClick={() => toggleAsWatch(movie.uuid)}
          >
            <TableCell>
              <div className="flex items-center justify-center space-x-2">
                <Checkbox id="watched" checked={movie.watched} />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                ></label>
              </div>
            </TableCell>
            <TableCell className="font-medium">{movie.title}</TableCell>
            <TableCell>{movie.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
