'use client'

import { useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import Signin from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'
import { Icon } from '@iconify/react/dist/iconify.js'
import TopHeader from './Navigation/TopHeader'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Heights in px (adjust to your design)
  const TOP_HEADER_HEIGHT = 40
  const MAIN_HEADER_HEIGHT = 72
  //const TOTAL_HEADER_HEIGHT = TOP_HEADER_HEIGHT + MAIN_HEADER_HEIGHT

  const handleScroll = () => {
    setSticky(window.scrollY >= 40)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (signInRef.current && !signInRef.current.contains(event.target as Node)) {
      setIsSignInOpen(false)
    }
    if (signUpRef.current && !signUpRef.current.contains(event.target as Node)) {
      setIsSignUpOpen(false)
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && navbarOpen) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  useEffect(() => {
    document.body.style.overflow = isSignInOpen || isSignUpOpen || navbarOpen ? 'hidden' : ''
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  return (
    <>
      {/* Fixed Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          sticky ? 'shadow-lg bg-[#814AC8]' : 'bg-[#814AC8]'
        }`}
      >
        {/* Top Header */}
        <div
  className="bg-brand-blue"
    style={{ height: TOP_HEADER_HEIGHT }}
    >
    <TopHeader />
    </div>

        {/* Main Header */}
        <div
          className='w-full flex items-center justify-between py-6 container'
          style={{ height: MAIN_HEADER_HEIGHT }}
        >
          <Logo />

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex grow items-center gap-8 justify-start md:ml-20'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Sign In / Sign Up + Mobile Toggle */}
          <div className='flex items-center gap-4'>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'
            >
              <span className='block w-6 h-0.5 bg-black'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer so content starts below header */}
      {/* <div style={{ height: TOTAL_HEADER_HEIGHT }} /> */}

      {/* Mobile Menu Overlay */}
      {navbarOpen && <div className='fixed top-[112px] left-0 w-full h-full bg-black/50 z-40' />}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-[112px] right-0 h-full w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between p-4'>
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5"
            aria-label='Close menu'
          />
        </div>

        <nav className='flex flex-col items-start p-4'>
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}

          <div className='mt-4 flex flex-col gap-4 w-full'>
            {/* <Link
              href='#'
              className='bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white'
              onClick={() => {
                setIsSignInOpen(true)
                setNavbarOpen(false)
              }}
            >
              Sign In
            </Link>
            <Link
              href='#'
              className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700'
              onClick={() => {
                setIsSignUpOpen(true)
                setNavbarOpen(false)
              }}
            >
              Sign Up
            </Link> */}
          </div>
        </nav>
      </div>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
          <div
            ref={signInRef}
            className='relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey/90 backdrop-blur-md'
          >
            <button
              onClick={() => setIsSignInOpen(false)}
              className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
              aria-label='Close Sign In Modal'
            >
              <Icon icon='tabler:currency-xrp' className='text-white hover:text-primary text-24' />
            </button>
            <Signin />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
          <div
            ref={signUpRef}
            className='relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-dark_grey/90 backdrop-blur-md px-8 pt-14 pb-8 text-center'
          >
            <button
              onClick={() => setIsSignUpOpen(false)}
              className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
              aria-label='Close Sign Up Modal'
            >
              <Icon icon='tabler:currency-xrp' className='text-white hover:text-primary text-24' />
            </button>
            <SignUp />
          </div>
        </div>
      )}
    </>
  )
}

export default Header
