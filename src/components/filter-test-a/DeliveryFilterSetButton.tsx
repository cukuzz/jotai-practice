import { useSetAtom } from 'jotai'
import { filterAAtom } from '../atoms'

const DeliveryFilterSetButton: React.FC = () => {
  const setFilterA = useSetAtom(filterAAtom)
  return (
    <>
      <button
        onClick={() =>
          setFilterA((prev) => {
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
          setFilterA((prev) => {
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
