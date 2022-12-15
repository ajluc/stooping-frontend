import StoopCard from './stoopCard'
import { useParams } from 'react-router-dom'

const StoopDetails = ({ stoops, user }) => {
  let { id } = useParams()

  const stoop = stoops?.filter((el) => el.id == id)
  if (stoop) {
    return <StoopCard stoop={stoop[0]} user={user} />
  }
  // return <p>uhhh</p>
}

export default StoopDetails
