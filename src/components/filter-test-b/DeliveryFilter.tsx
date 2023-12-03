import { useEffect, useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { filterBAtom } from '../atoms'

const DeliveryFilter: React.FC = () => {
  const fdState = useAtomValue(useMemo(() => selectAtom(filterBAtom, (data) => data.delivery.fd), []))
  const gftState = useAtomValue(useMemo(() => selectAtom(filterBAtom, (data) => data.delivery.gft), []))
  useEffect(() => {
    console.log('>>>>> FilterB Delivery !!')
  }, [fdState, gftState])
  return (
    <>
      <div>
        {fdState.name}: {fdState.checked ? '선택됨' : '해제됨'}
      </div>
      <div>
        {gftState.name}: {gftState.checked ? '선택됨' : '해제됨'}
      </div>
    </>
  )
}

export default DeliveryFilter
