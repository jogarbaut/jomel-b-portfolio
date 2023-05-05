import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

const AccordionItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    setIsExpanded((previousState) => !previousState)
  }

  const icon = (
    <span className="text-xl">
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  )

  return (
    <article>
      <div
        className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
        onClick={handleClick}
      >
        {item.title}
        {icon}
      </div>
      {isExpanded && (
        <div className="border-b p-5">
          <div className="mx-auto">{item.description}</div>
        </div>
      )}
    </article>
  )
}

export default AccordionItem
