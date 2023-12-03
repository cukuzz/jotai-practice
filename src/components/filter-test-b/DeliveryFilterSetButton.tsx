import { useSetAtom } from 'jotai'
import { filterBAtom } from '../atoms'

const DeliveryFilterSetButton: React.FC = () => {
  const setFilter = useSetAtom(filterBAtom)
  return (
    <>
      <button
        onClick={() =>
          setFilter((prev) => {
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
          setFilter((prev) => {
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
