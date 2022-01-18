import {  memo,  useState,  useEffect } from 'react';
import ReactMapboxGl, {  Layer,  Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// in render()
type MapProps = {
  accessToken: string;
  coordinates: [number, number];
};

type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const Map = ({ accessToken, coordinates }: MapProps) => {
  const InitialState: {
    viewport: Viewport;
  } = {
    viewport: {
      latitude: coordinates[1],
      longitude: coordinates[0],
      zoom: 15
    }
  };
  const [state, setState] = useState(InitialState);

  const MapComponent = ReactMapboxGl({
    accessToken
  });

  useEffect(() => {
    setState(state => ({
      ...state,
      viewport: {
        ...state.viewport,
        latitude: coordinates[1],
        longitude: coordinates[0]
      }
    }));
  }, [coordinates]);
  return (
    <>
      {typeof window !== 'undefined' && (
        <MapComponent
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '280px',
            width: '280px'
          }}
          center={[state.viewport.longitude, state.viewport.latitude]}
        >
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[state.viewport.longitude, state.viewport.latitude]} />
          </Layer>
        </MapComponent>
      )}
    </>
  );
};

export default memo(Map);
