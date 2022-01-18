import { memo } from 'react';
import StyledEditUserPopup from './styled/StyledEditUserPopup';
import { Input, Button, AddressInput, Map, Popup } from '../../';

type EditUserPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onChange: (key: string, value: any) => void;
  onSave: () => void;
  onCancel: () => void;
  accessToken: string;
  coordinates: [number, number];
  selectedUser: {
    name: string;
    address: string;
    description: string;
  };
};

const EditUserPopup = ({
  isOpen,
  onClose,
  selectedUser,
  onChange,
  onSave,
  onCancel,
  coordinates,
  accessToken
}: EditUserPopupProps) => (
  <Popup {...{ isOpen, onClose }}>
    <StyledEditUserPopup>
      <header>
        <h2>Edit user</h2>
      </header>
      <main>
        <div className="map">
          <Map
            {...{
              coordinates,
              accessToken
            }}
          />
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <Input
            {...{
              value: selectedUser.name,
              onChange: (e: any) => onChange('name', e.target.value),
              placeholder: 'Name',
              label: 'Name'
            }}
          />
          <AddressInput
            {...{
              accessToken,
              value: selectedUser.address,
              onChange: (e: any) => onChange('address', e.target.value)
            }}
          />
          <Input
            {...{
              value: selectedUser.description,
              onChange: (e: any) => onChange('description', e.target.valye),
              placeholder: 'Description',
              label: 'Description'
            }}
          />
          <div className="button__group">
            <Button onClick={onSave} variant="primary">
              SAVE
            </Button>
            <Button onClick={onCancel} variant="secondary">
              CANCEL
            </Button>
          </div>
        </form>
      </main>
    </StyledEditUserPopup>
  </Popup>
);

export default memo(EditUserPopup);
