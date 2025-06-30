// import './components/teamLayout.css'
import ProfileGrid from './components/ProfileGrid'
import {sourceData, circleSourceData} from './sourceData/data'

function App() {

  return (
    <>
    <ProfileGrid type="medium" source={sourceData}/>
    <ProfileGrid type="circle" source={circleSourceData} />
    <ProfileGrid type="inline" source={sourceData} />
    <ProfileGrid type="card" source={sourceData} />
    <ProfileGrid type='sdf' source={sourceData}/>
    <ProfileGrid/>
    </>
  )
}

export default App
