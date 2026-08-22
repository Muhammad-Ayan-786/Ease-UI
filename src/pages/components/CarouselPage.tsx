type Props = {}

const CarouselPage = ({ }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-linear-to-br from-indigo-900 via-purple-900 to-slate-900 text-white p-8 rounded-3xl shadow-2xl border border-white/10">
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-emerald-400">
        COMING SOON
      </h1>
      <p className="text-xl text-slate-300 font-light italic mb-8">
        The carousel experience you've been waiting for.
      </p>
      <div className="flex gap-4">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse delay-300"></div>
        <div className="w-4 h-4 rounded-full bg-purple-500 animate-pulse delay-500"></div>
      </div>
    </div>
  )
}

export default CarouselPage