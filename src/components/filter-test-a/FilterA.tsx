import { useEffect } from 'react'
import { filterAAtom } from '../atoms'
import HorizonLine from '../line/HorizonLine'
import DeliveryFilter from './DeliveryFilter'
import DeliveryFilterSetButton from './DeliveryFilterSetButton'
import StoreFilter from './StoreFilter'
import StoreFilterSetButton from './StoreFilterSetButton'
import { useSetAtom } from 'jotai'

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

const FilterA: React.FC = () => {
  const setFilterA = useSetAtom(filterAAtom)
  setFilterA(filterData)
  useEffect(() => {
    console.log('>>>> Render Filter A')
  }, [])
  return (
    <div>
      <DeliveryFilter />
      <DeliveryFilterSetButton />
      <HorizonLine />
      <StoreFilter />
      <StoreFilterSetButton />
    </div>
  )
}

export default FilterA
