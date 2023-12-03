import { useEffect, useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { filterBAtom } from '../atoms'

const StoreFilter: React.FC = () => {
  const elState = useAtomValue(useMemo(() => selectAtom(filterBAtom, (data) => data.store.el), []))
  const lmState = useAtomValue(useMemo(() => selectAtom(filterBAtom, (data) => data.store.lm), []))
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
