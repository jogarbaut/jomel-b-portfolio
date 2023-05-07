
const SectionTitle = ({children}) => {
  return (
    <div className="text-center w-full mb-8 mt-32 pt-16">
      <div className="w-[180px] h-[2px] bg-primary-500 mx-auto"></div>
      <div>{children}</div>
      <div className="w-[180px] h-[2px] bg-primary-500 mx-auto"></div>
    </div>
  )
}

export default SectionTitle