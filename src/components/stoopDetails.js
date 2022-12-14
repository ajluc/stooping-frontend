import StoopCard from './stoopCard'
import { useParams } from 'react-router-dom'

const StoopDetails = ({ stoops }) => {
  let { id } = useParams()

  const stoop = stoops?.filter((el) => el.id == id)
  if (stoop) {
    return <StoopCard stoop={stoop[0]} />
  }
  // return <p>uhhh</p>
}

export default StoopDetails
