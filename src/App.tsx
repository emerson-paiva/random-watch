import { Button } from '@/components/ui/button'
import { NewMovieDialog } from '@/components/NewMovie/NewMovie'

function App() {
  return (
    <main className="relative w-full h-full min-h-[100vh]">
      <Button>Click me</Button>
      <NewMovieDialog />
    </main>
  )
}

export default App
