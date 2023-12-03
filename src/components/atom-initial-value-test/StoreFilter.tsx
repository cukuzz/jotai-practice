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
const StoreFilter: React.FC = () => {
  const elState = useAtomValue(useMemo(() => selectAtom(filterCAtom(filterData), (data) => data.store.el), []))
  const lmState = useAtomValue(useMemo(() => selectAtom(filterCAtom(filterData), (data) => data.store.lm), []))
  useEffect(() => {
    console.log('>>>>> FilterB Store !!')
  }, [elState, lmState])
  return (
    <>
      <div>
        {elState.name}: {elState.checked ? '선택됨' : '해제됨'}
      </div>
      <div>
        {lmState.name}: {lmState.checked ? '선택됨' : '해제됨'}
      </div>
    </>
  )
}

export default StoreFilter
