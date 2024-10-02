import { NewMovieDialog } from '@/components/NewMovie/NewMovie'
import { WatchListProvider } from '@/context/Movies'
import { Recommend } from './components/Recommend/Recommend'
import { WatchList } from './components/WatchList/WatchList'

function App() {
  return (
    <main className="relative w-full h-full min-h-[100vh] p-6 md:p-12">
      <WatchListProvider>
        <Recommend />
        <WatchList />
        <NewMovieDialog />
      </WatchListProvider>
    </main>
  )
}

export default App
