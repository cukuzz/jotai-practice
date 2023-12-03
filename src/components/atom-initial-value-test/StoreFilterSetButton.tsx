import { useSetAtom } from 'jotai'
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
const StoreFilterSetButton: React.FC = () => {
  const setFilterA = useSetAtom(filterCAtom(filterData))
  return (
    <>
      <button
        onClick={() =>
          setFilterA((prev: { store: { el: { checked: any } } }) => {
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
          setFilterA((prev: { store: { lm: { checked: any } } }) => {
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
