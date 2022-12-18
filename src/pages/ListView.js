import { useEffect, useState, useMemo } from 'react'
import { GetStoops } from '../services/StoopServices'
import StoopCard from '../components/stoopCard'
import Pagination from '../components/pagination'

let PageSize = 3

const ListView = ({ user }) => {
  const [stoops, setStoops] = useState([])

  const getStoops = async () => {
    const stoopsData = await GetStoops()
    setStoops(stoopsData)
  }

  useEffect(() => {
    getStoops()
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return stoops.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <div className="list-container">
      <div className="flex-row">
        {currentTableData.map((stoop) => (
          <div key={stoop.id}>
            <StoopCard id={stoop.id} stoop={stoop} />
          </div>
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={stoops.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default ListView
