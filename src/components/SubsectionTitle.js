
const SubsectionTitle = ({children}) => {
  return (
    <div className="text-center w-full my-8">
      <h2 className="text-xl font-semibold mb-4">{children}</h2>
      <div className="w-[100px] h-[2px] bg-primary-500 mx-auto"></div>
    </div>
  )
}

export default SubsectionTitle