
import Navbar from '@/components/Navbar'
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12 ">
        <section className="head-container font-sans w-screen">
          <h1 className=' font-normal text-5xl lg:text-9xl'>THE BLOG</h1>
        </section>
        <section className='flex flex-row h-max w-full'>
          <div className='grid grid-flow-row items-center justify-center lg:grid-flow-col h-fit flex-1 auto-cols-max gap-4 md:gap-6 lg:gap-10'>
            <div className='flex flex-col p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>
            <div className='flex flex-col p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>
            <div className='flex flex-col p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>
            <div className='flex flex-col p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>
            <div className='flex flex-col p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>
          </div>
          <div className='hidden md:flex flex-col scroll-m-1'>
            <div className='flex flex-row gap-2 p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>
            <div className='flex flex-row gap-2 p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>
            <div className='flex flex-row gap-2 p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>
            <div className='flex flex-row gap-2 p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>
            <div className='flex flex-row gap-2 p-6 border border-emerald-600 hover:border-emerald-800 m-2 items-center rounded-md'><h1>Title</h1>Hello <button>view post</button></div>          
          </div>
        </section>
      </main>
    </>
  )
}
