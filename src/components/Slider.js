import { useState } from "react"
import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import Slide from "./Slide"

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextArrowClick = () => {
    const isLastSlide = currentIndex === items.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const handlePreviousArrowClick = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="w-full h-full rounded-xl relative grid content-center px-6">
      <div
        className="absolute top-1/2 text-2xl left-0 rounded p-2 bg-gray-500/30 hover:bg-gray-500 text-white cursor-pointer hover:duration-300 duartion-300"
        onClick={handlePreviousArrowClick}
      >
        <GoChevronLeft />
      </div>
      <div
        className="absolute top-1/2 right-0 text-2xl rounded p-2 bg-gray-500/30 hover:bg-gray-500 text-white cursor-pointer hover:duration-300 duration-300"
        onClick={handleNextArrowClick}
      >
        <GoChevronRight />
      </div>
      <Slide item={items[currentIndex]} />
    </div>
  )
}

export default Slider
