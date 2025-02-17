import { DisplayHome } from "./scene";

export default function HouseSection() {
  return (
    <section className="min-h-screen relative bg-none text-foreground">
      {/* Text overlay centered absolutely */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
        <div className="animate-[float_5s_ease-in-out_infinite]">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">A house?</h1>
          <p className="text-xl md:text-2xl text-gray-300">I think we might disagree</p>
        </div>
      </div>

      {/* 3D container filling entire section */}
      <div className="flex h-screen w-[80vw] items-center mt-20">
      <DisplayHome />
      </div>
    </section>
  )
}
