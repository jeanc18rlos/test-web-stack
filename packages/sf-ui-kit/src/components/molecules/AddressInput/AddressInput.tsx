import { useState, useEffect } from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';
import Input from '../../atoms/Input';

const InputComponent = (props: any) => {
  return <Input {...{ ...props, placeholder: 'Location', label: 'Location' }} />;
};
const AddressInput = ({ accessToken }: { accessToken: string }) => {
  const [state, setState] = useState({
    value: '',
    viewport: {}
  });
  const onSelected = (viewport: any, item: any) => {
    console.dir({
      viewport,
      value: item
    });
    setState(state => ({
      ...state,
      viewport,
      value: item.place_name
    }));
  };
  useEffect(() => {
    console.dir(state);
  }, [state.value]);
  return (
    <Geocoder
      mapboxApiAccessToken={accessToken}
      onSelected={(viewport: any, item: any) => onSelected(viewport, item)}
      viewport={state.viewport}
      initialInputValue={state.value}
      updateInputOnSelect={true}
      inputComponent={InputComponent}
    />
  );
};
export default AddressInput;
