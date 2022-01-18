import { useState } from 'react';
import { Popup, Modal } from './Modal';
import Button from '../../atoms/Button';
import { StoryWrapper, StoryHeader, StoryHeading } from '../../../utils/stories';
import { Meta } from '@storybook/react';
export default {
  title: 'Components/molecules/Modal',
  component: Modal
} as Meta;

export const modal = () => {
  const [isOpen, openModal] = useState(false);

  return (
    <>
      <StoryWrapper>
        <StoryHeader name="modal" />
        <br />
        <br />
        <StoryHeading>
          <h2>Normal</h2>
        </StoryHeading>
        <br />
        <br />
        <Button
          variant="primary"
          onClick={() => {
            openModal(true);
          }}
        >
          Open Modal
        </Button>
      </StoryWrapper>
      <Popup
        onClose={() => {
          openModal(false);
        }}
        isOpen={isOpen}
      >
        <div
          style={{
            width: '300px',
            height: '300px'
          }}
        >
          Hello from modal
        </div>
      </Popup>
    </>
  );
};
