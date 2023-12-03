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
const DeliveryFilterSetButton: React.FC = () => {
  const setFilter = useSetAtom(filterCAtom(filterData))
  return (
    <>
      <button
        onClick={() =>
          setFilter((prev: { delivery: { fd: { checked: any } } }) => {
            return {
              ...prev,
              delivery: { ...prev.delivery, fd: { ...prev.delivery.fd, checked: !prev.delivery.fd.checked } },
            }
          })
        }
      >
        무료배송 선택
      </button>
      <button
        onClick={() =>
          setFilter((prev: { delivery: { gft: { checked: any } } }) => {
            return {
              ...prev,
              delivery: { ...prev.delivery, gft: { ...prev.delivery.gft, checked: !prev.delivery.gft.checked } },
            }
          })
        }
      >
        선물하기 선택
      </button>
    </>
  )
}

export default DeliveryFilterSetButton
