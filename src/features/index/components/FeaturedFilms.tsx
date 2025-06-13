import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const basePath = "/selected";
const imageBaseUrl = basePath + "/";

const images = [
  "1000048523.jpg",
  "1000328425.png",
  "465178494_8845066285544980_6241852167358797281_n.jpg",
  "Amitabha Kumbh Shortfilm Poster.png",
  "Beleghata to Sealdah Latest Poster_page-0001.jpg",
  "CHAI-COFFI_Print.jpg",
  "Coboram la prima_100x70cm.jpg",
  "Copy of Mountain and Sea Photo Merge Movie Poster (1).png",
  "docu bella for print (2).jpg",
  "Document from Shrey Rajdeo_page-0001.jpg",
  "Document from Shrey Rajdeo.jpg",
  "Document from Shrey Rajdeo.png",
  "Film_Poster.png",
  "Illustration65sdasda.jpg",
  "image0.jpeg",
  "IMG_20250605_183346.png",
  "IMG-20250604-WA0043.jpg",
  "IMG-20250604-WA0045.jpg",
  "IMG-20250611-WA0071.jpg",
  "JengAI_poster.png",
  "Land Rover Family1.jpg",
  "LKK POSTER.jpg",
  "OFFICIAL POSTER 2025 (1).jpg",
  "Photo from Shrey Rajdeo (1).jpg",
  "Photo from Shrey Rajdeo.jpg",
  "Photo from Shrey Rajdeo(1).jpg",
  "Photo from Shrey Rajdeo(2).jpg",
  "Photo from Shrey Rajdeo(3).jpg",
  "Photo from Shrey Rajdeo(4).jpg",
  "Photo from Shrey Rajdeo(5).jpg",
  "Photo from Shrey Rajdeo(6).jpg",
  "Photo from Shrey Rajdeo(7).jpg",
  "Poster_Unbreakable_JPG.jpg",
  "poster-the-bureau-instagram.png",
  "poster1.jpg",
  "Samayada Harivu-UpdatedPoster.png",
  "Sohochori Poster.png",
  "TAMGA poster copy.jpg",
  "The Lost Girl Poster.png",
  "The world is in our hands.JPG",
  "TheMarsNovella IGPoster wDhrumaFF.png",
  "Virtual Strangers - Poster 1080X1080 - v01.png",
  "465178494_8845066285544980_6241852167358797281_n.jpg"
].map(file => imageBaseUrl + encodeURIComponent(file));



const FeaturedFilms = ({
  label
}: {
  label?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [duplicates, setDuplicates] = useState(2)
  const [isHovered, setIsHovered] = useState<number | null>(null)

  useEffect(() => {
    const calculateDuplicates = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const filmWidth = 56 + 16 // Film width + margin (56px + 16px gap)
      const visibleFilms = Math.ceil(containerWidth / filmWidth)

      // We need at least 2 sets to create the infinite effect
      setDuplicates(Math.max(2, Math.ceil(visibleFilms / images.length) + 1))
    }

    calculateDuplicates()
    window.addEventListener("resize", calculateDuplicates)

    return () => {
      window.removeEventListener("resize", calculateDuplicates)
    }
  }, [])

  // Create duplicated film sets for the infinite scroll
  const allFilms = Array(duplicates)
    .fill(0)
    .flatMap(() => images)

  return (
    <motion.div
      className="w-full overflow-hidden py-16"
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {label && <motion.h2
        className="primary-heading text-center mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.h2>}

      <div
        className="animate-carousel flex  px-4"
        style={{
          animationDuration: `${15}s`,
          animationPlayState: isHovered !== null ? "paused" : "running",
        }}
      >
        {allFilms.map((film, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            onHoverStart={() => setIsHovered(index)}
            onHoverEnd={() => setIsHovered(null)}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
          >
            <div className="bg-[url('/film_cover.svg')] bg-center bg-cover h-56 md:h-72 w-44 md:w-56">
              <div className="w-full h-full py-7 md:py-9 px-4 md:px-5 relative overflow-hidden">
                <motion.img
                  src={film || "/placeholder.svg"}
                  alt={film}
                  className="h-full w-full rounded-md object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                {isHovered === index && (
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="px-3 py-1.5 bg-[#FF8B17] text-white rounded-full text-sm">Watch Trailer</button>
                  </motion.div>
                )}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default FeaturedFilms
