import Image from "next/image"

export default function HouseSection() {
  return (
    <section className="min-h-screen flex flex-col items-center pt-16 px-4 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">A house?</h1>
        <p className="text-xl text-gray-600">I think we might disagree</p>
      </div>
      <div className="w-full max-w-2xl">
        <Image
          src="/HA.svg"
          alt="A questionable house"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

