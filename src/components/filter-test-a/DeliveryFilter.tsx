import { useAtomValue } from 'jotai'
import { filterAAtom } from '../atoms'
import { useEffect } from 'react'

const DeliveryFilter: React.FC = () => {
  const filterData = useAtomValue(filterAAtom)
  useEffect(() => {
    console.log('>>>>> FilterA Delivery !!')
  }, [filterData])
  return (
    <>
      <div>
        {filterData.delivery.fd.name}: {filterData.delivery.fd.checked ? '선택됨' : '해제됨'}
      </div>
      <div>
        {filterData.delivery.gft.name}: {filterData.delivery.gft.checked ? '선택됨' : '해제됨'}
      </div>
    </>
  )
}

export default DeliveryFilter
