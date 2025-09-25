import React from 'react'
import Navbar from '../components/landingpage/navbar'
import RegisterHero from '../components/register/RegisterHero'
import RegisterComponent from '../components/register/register'
import useRouteAnimation from '../utils/animatie'

const Register = () => {
  const isLoaded = useRouteAnimation()
  return <RegisterHero isLoaded={isLoaded} />
}

export default Register
