// import './components/teamLayout.css'
import TeamLayout from './components/teamLayout'
import {sourceData, circleSourceData} from './sourceData/data'

function App() {

  return (
    <>
    <TeamLayout type="medium" source={sourceData}/>
    <TeamLayout type="circle" source={circleSourceData} />
    <TeamLayout type="inline" source={sourceData} />
    <TeamLayout type="card" source={sourceData} />
    <TeamLayout />
    </>
  )
}

export default App
