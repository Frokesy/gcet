import { EmptyStar, FilledStar, HalfStar } from '../svgs/starIcons'

const ThreeandHalf = () => {
  return (
    <div className='flex items-center space-x-2'>
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <HalfStar />
      <EmptyStar />
    </div>
  )
}

export default ThreeandHalf
