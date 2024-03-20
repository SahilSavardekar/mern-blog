import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'

export default function OAuth() {
  return (
  <Button type='button' gradientDuoTone='cyanToBlue' outline>
    <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
    Continue with Google
  </Button>
    
  )
}
