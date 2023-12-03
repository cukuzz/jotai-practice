import HorizonLine from '../line/HorizonLine'
import DeliveryFilter from './DeliveryFilter'
import DeliveryFilterSetButton from './DeliveryFilterSetButton'
import StoreFilter from './StoreFilter'
import StoreFilterSetButton from './StoreFilterSetButton'

const FilterC: React.FC = () => {
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

export default FilterC
