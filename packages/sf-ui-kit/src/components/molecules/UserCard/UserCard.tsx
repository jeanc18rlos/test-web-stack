import { memo } from 'react';
import StyledUserCard from './styled/StyledUserCard';
import { Avatar, Icons } from '../../';

type UserCardProps = {
  onClickEdit: () => void;
  onClickDelete: () => void;
  user: {
    avatar: string;
    name: string;
    createdAt: string;
    description: string
  };
};

const UserCard = ({ onClickEdit, onClickDelete, user }: UserCardProps) => (
  <StyledUserCard  className="user__card">
    <header>
      <button onClick={onClickEdit}>
        <Icons.outlined.Pencil
          {...{
            width: '25px',
            fill: 'gray'
          }}
        />
      </button>
      <button onClick={onClickDelete}>
        <Icons.outlined.Eraser
          {...{
            width: '25px',
            fill: 'gray'
          }}
        />
      </button>
    </header>
    <Avatar image={user.avatar} alt={user.name} />
    <div className="user__data">
      <h2>{user.name}</h2>
      <p>
        created <span>{new Date(user.createdAt).toLocaleDateString()}</span>
      </p>
    </div>
    <p>{user.description}</p>
  </StyledUserCard>
);

export default memo(UserCard);
