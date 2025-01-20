import Image from "next/image"

export default function Profile() {
  return (
    <section className="flex justify-center items-center animate-fadeInUp">
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image src="/public/image.jpeg" alt="Your Name" layout="fill" objectFit="cover" />
      </div>
    </section>
  )
}