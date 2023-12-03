import { useEffect, useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { filterCAtom } from '../atoms'

const filterData = {
  delivery: {
    fd: { name: '무료배송', checked: false },
    gft: { name: '선물하기', checked: false },
  },
  store: {
    el: { name: '롯데백화점', checked: false },
    lm: { name: '롯데마트', checked: false },
  },
}

const DeliveryFilter: React.FC = () => {
  const fdState = useAtomValue(useMemo(() => selectAtom(filterCAtom(filterData), (data) => data.delivery.fd), []))
  const gftState = useAtomValue(useMemo(() => selectAtom(filterCAtom(filterData), (data) => data.delivery.gft), []))
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
