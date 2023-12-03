import { useAtomValue } from 'jotai'
import { filterAAtom } from '../atoms'
import { useEffect } from 'react'

const StoreFilter: React.FC = () => {
  const filterData = useAtomValue(filterAAtom)
  useEffect(() => {
    console.log('>>>>> FilterA Store !!')
  }, [filterData])
  return (
    <>
      <div>
        {filterData.store.el.name}: {filterData.store.el.checked ? '선택됨' : '해제됨'}
      </div>
      <div>
        {filterData.store.lm.name}: {filterData.store.lm.checked ? '선택됨' : '해제됨'}
      </div>
    </>
  )
}

export default StoreFilter
