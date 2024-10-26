import React from 'react'
import { FilledStar, HalfStar } from '../svgs/starIcons'

const FourandHalf = () => {
  return (
    <div className='flex items-center space-x-2'>
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <HalfStar />
    </div>
  )
}

export default FourandHalf
