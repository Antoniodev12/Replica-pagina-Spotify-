import { Footer } from '@/components/Footer';
import { SideBar } from '@/components/SideBar';
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar/>
        <main className="flex-1 p-6">
          <div className=' flex itens-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>
          <h1 className='text-3xl font-semibold mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/cd-dragon.jpg" width={104} height={104} alt="DragonForce"/>
              <strong>DragonForce-The Power Within</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/cd-foo-fights.jpg" width={104} height={104} alt="DragonForce"/>
              <strong>Foo Fighters-Great Hits</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/cd-lady.jpg" width={104} height={104} alt="DragonForce"/>
              <strong>Lady Gaga-Poker Face</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/cd-michael.jpg" width={104} height={104} alt="DragonForce"/>
              <strong>Michael Jackson-Beat</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/cd-nx.jpg" width={104} height={104} alt="DragonForce"/>
              <strong>Nx-zero</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/cd-one-ok.jpg" width={104} height={104} alt="DragonForce"/>
              <strong>On Ok Rock - Jins</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
          </div>
          <h2 className='text-3xl font-semibold mt-10'>Made for AntonioDev12</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-b-md hover:bg-white/10'>
              <Image src="/cd-dragon.jpg" className='w-full' width={104} height={104} alt="DragonForce"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-b-md hover:bg-white/10'>
              <Image src="/cd-foo-fights.jpg" className='w-full' width={104} height={104} alt="DragonForce"/>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-b-md hover:bg-white/10'>
              <Image src="/cd-one-ok.jpg" className='w-full' width={104} height={104} alt="DragonForce"/>
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-b-md hover:bg-white/10'>
              <Image src="/cd-michael.jpg" className='w-full' width={104} height={104} alt="DragonForce"/>
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-b-md hover:bg-white/10'>
              <Image src="/cd-nx.jpg" className='w-full' width={104} height={104} alt="DragonForce"/>
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>

        </main>
      </div>
     
       <Footer/>
    </div>
  );
}
