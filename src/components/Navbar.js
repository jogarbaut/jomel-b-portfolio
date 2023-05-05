import { useEffect, useState } from 'react'
import useMediaQuery from "../hooks/useMediaQuery"
import NavLink from './NavLink'
import { GoThreeBars, GoX } from "react-icons/go"

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isUserTopOfPage, setIsUserTopOfPage] = useState(true)

  const isLargeScreenAndAbove = useMediaQuery("(min-width:1025px)")

  const navbarBackground = isUserTopOfPage
    ? ""
    : "bg-white drop-shadow-xl transition duration-500"

  const [isMenuToggled, setIsMenuToggled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsUserTopOfPage(true)
        setSelectedPage('home')
      } else {
        setIsUserTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setSelectedPage])

  const renderedFullNavbar = (
    <>
      <div className="flex items-center justify-between gap-4 text-sm">
        <NavLink
          to="home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          About
        </NavLink>
        <NavLink
          to="projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          Projects
        </NavLink>
        <NavLink
          to="techSkills"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          Tech Skills
        </NavLink>
        <NavLink
          to="connect"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          Connect
        </NavLink>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button>Resume</button>
      </div>
    </>
  )

  const renderedMinimizedNavbar = (
    <button
      className="rounded-full bg-primary-500 p-2"
      onClick={() => setIsMenuToggled(!isMenuToggled)}
    >
      <GoThreeBars className="h-6 w-6 text-white" />
    </button>
  )

  const renderedNavbarModal = (
    <div className="fixed right-0 left-0 z-20 min-h-min top-0 w-full bg-white drop-shadow-xl">
      <div className="flex justify-between pt-6 px-4">
        <div className="font-bold">
          <h1>Jomel Bautista</h1>
        </div>
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <GoX className="h-6 w-6 text-gray-400" />
        </button>
      </div>
      <div className="ml-4 flex flex-col gap-4 text-sm py-4">
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="techSkills">Tech Skills</NavLink>
        <NavLink to="connect">Connect</NavLink>
        <div className="flex gap-4 justify-start">
          <button>Resume</button>
        </div>
      </div>
    </div>
  )

  return (
    <nav className="w-full">
    <div
      className={`${navbarBackground} fixed top-0 z-10 flex w-full py-4 transition duration-300`}
    >
      <div className="flex flex-row items-center justify-between max-w-7xl w-full mx-auto px-4">
        <div className="font-bold">
          <h1>Jomel Bautista</h1>
        </div>
        {isLargeScreenAndAbove ? renderedFullNavbar : renderedMinimizedNavbar}
      </div>
    </div>
    {!isLargeScreenAndAbove && isMenuToggled && renderedNavbarModal}
  </nav>
  )
}

export default Navbar