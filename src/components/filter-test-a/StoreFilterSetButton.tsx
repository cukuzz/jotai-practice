import { useSetAtom } from 'jotai'
import { filterAAtom } from '../atoms'

const StoreFilterSetButton: React.FC = () => {
  const setFilterA = useSetAtom(filterAAtom)
  return (
    <>
      <button
        onClick={() =>
          setFilterA((prev) => {
            return {
              ...prev,
              store: { ...prev.store, el: { ...prev.store.el, checked: !prev.store.el.checked } },
            }
          })
        }
      >
        롯데백화점 선택
      </button>
      <button
        onClick={() =>
          setFilterA((prev) => {
            return {
              ...prev,
              store: { ...prev.store, lm: { ...prev.store.lm, checked: !prev.store.lm.checked } },
            }
          })
        }
      >
        롯데마트 선택
      </button>
    </>
  )
}

export default StoreFilterSetButton
