const Slide = ({ item }) => {
  return (
    <div className="border p-4 rounded">
      <div className="w-full h-full relative duration-500">
        <img
          src={item.src}
          alt={item.alt}
          className="object-contain w-full max-w-[500px] mx-auto"
        />
        <div className="italic mt-2">
          <span className="text-primary-500 mr-1 font-semibold">
            Description:
          </span>
          {item.caption}
        </div>
      </div>
    </div>
  )
}

export default Slide
