type Props = {}

const LayoutPage = ({ }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-slate-950 text-white p-12 rounded-3xl relative overflow-hidden border border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight z-10 text-center">
        Layouts Under Construction
      </h1>
      <div className="mt-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-400 z-10">
        Something incredible is in the works
      </div>
    </div>
  )
}

export default LayoutPage