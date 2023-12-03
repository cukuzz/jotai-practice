import './App.css'
import FilterC from './components/atom-initial-value-test/FilterC'
import FilterA from './components/filter-test-a/FilterA'
import FilterB from './components/filter-test-b/FilterB'
import HorizonLine from './components/line/HorizonLine'

function App() {
  return (
    <>
      <div>
        <HorizonLine text="Filter A Test" />
        <FilterA />
        <HorizonLine />
      </div>
      <div>
        <HorizonLine text="Filter B Test" />
        <FilterB />
        <HorizonLine />
      </div>
      <div>
        <HorizonLine text="Filter C Test" />
        <FilterC />
        <HorizonLine />
      </div>
    </>
  )
}

export default App
