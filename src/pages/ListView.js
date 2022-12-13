import { useEffect, useState } from 'react'
import { GetStoops } from '../services/StoopServices'
import StoopCard from '../components/stoopCard'

const ListView = ({ user }) => {
  const [stoops, setStoops] = useState([])

  const getStoops = async () => {
    const stoopsData = await GetStoops()
    setStoops(stoopsData)
  }

  useEffect(() => {
    getStoops()
  }, [])

  return user ? (
    <div>
      <p>Let's see them eh?</p>
    </div>
  ) : (
    <div>
      <p>Please sign in but in the meantime let's see them eh?</p>
      {stoops.map((stoop) => (
        <div key={stoop.id}>
          <StoopCard id={stoop.id} stoop={stoop} />
        </div>
      ))}
    </div>
  )
}

export default ListView
