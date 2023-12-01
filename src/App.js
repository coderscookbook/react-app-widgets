import * as ReactDOM from 'react-dom/client'
import './App.css';
import { useEffect, useRef } from 'react';
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import CustomWidget from './CustomWidget'

function App() {
  // Create ref objects
  const mapDiv = useRef()
  const map = useRef()
  const mapView = useRef()

  useEffect(() => {
    map.current = new Map({
      basemap: 'streets-vector'
    })

    mapView.current = new MapView({
      map: map.current
    })
    
    // console.log("Map.current: ", map.current)
    mapView.current.container = mapDiv.current

    // Install CustomWidget into ArcGIS map
    let widgetNode = document.createElement('div')
    let widgetRoot = ReactDOM.createRoot(widgetNode)
    mapView.current.ui.add(widgetNode, 'top-left')
    widgetRoot.render(<CustomWidget />)
  }, []) // empty dependency array means this effect runs once after the initial render
  
  return (
    <div 
      className="App"
      ref={mapDiv}
      style={{
        height: '100vh',
        width: '100vw'
      }}
    >
    </div>
  );
}

export default App;
