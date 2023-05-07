const Footer = () => {
  const today = new Date()
  return (
    <footer className='bg-primary-500 w-full py-8'>
      <div className='max-w-5xl mx-auto text-center text-white'>
      Copyright &copy; {today.getFullYear()} Jomel Bautista
      </div>
    </footer>
  )
}

export default Footer