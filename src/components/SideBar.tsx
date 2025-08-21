import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize} from 'lucide-react';
export function SideBar(){
    return(
        <aside className="w-72 bg-zinc-950 p-6">
            <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>
            <nav className='space-y-6 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-200'><HomeIcon/>Inicio</a>
            <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-200'><Search/>Pesquisar</a>
            <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-200'><Library/> Sua biblioteca de musicas</a>
            </nav>
            <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Aniver Funck</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>My Playlist #13</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
            </nav>
        </aside>
    )
}