import { data } from '../../../data/data';
import { EditUserPopup, Button, Input, UserCard } from '../../';
import StyledUserList from './styled/StyledUsersList';
import { useState, useEffect } from 'react';

const UsersLists = () => {
  const [isModalOpen, openModal] = useState(false);
  const [state, setState] = useState({
    users: data,
    filteredUsers: data,
    selectedUser: data[0],
    selectedUserIndex: 0,
    currentPage: 1,
    paginatedResults: data.slice(0, 5),
    searchTerm: undefined
  });

  const onChange = (key: string, value: any) => {
    setState({
      ...state,
      selectedUser: {
        ...state.selectedUser,
        [key]: value
      }
    });
  };

  const mutateStateKey = (key: string, value: any) =>
    setState(state => ({
      ...state,
      [key]: value
    }));

  useEffect(() => {
    mutateStateKey('paginatedResults', state.filteredUsers.slice(0, state.currentPage * 6));
  }, [state.currentPage, state.users, state.filteredUsers]);

  useEffect(() => {
    mutateStateKey(
      'filteredUsers',
      state.searchTerm
        ? state.users.filter((user: any) => {
            return user.name
              .normalize('NFD')
              .toLowerCase()
              .includes((state.searchTerm || '').normalize('NFD').toLowerCase());
          })
        : state.users
    );
  }, [state.searchTerm, state.users]);

  return (
    <StyledUserList>
      <header>
        <h1>UserLists</h1>
        <div
          style={{
            maxWidth: '320px'
          }}
        >
          <Input
            {...{
              value: state.searchTerm,
              placeholder: 'Search...',
              onChange: (e: { target: { value: string; }; }) => mutateStateKey('searchTerm', e.target.value.trim() === '' ? undefined : e.target.value)
            }}
          />
        </div>
      </header>

      <main>
        <EditUserPopup
          {...{
            coordinates: [-73.58781, 45.50884],
            isOpen: isModalOpen,
            onClose: () => openModal(false),
            onChange,
            onSave: () => {
              mutateStateKey(
                'users',
                state.users.map((user, index) => {
                  if (index === state.selectedUserIndex) {
                    return state.selectedUser;
                  } else {
                    return user;
                  }
                })
              );
              openModal(false);
            },
            onCancel: () => {
              mutateStateKey('selectedUser', state.users[state.selectedUserIndex]);
              openModal(false);
            },
            accessToken: process.env.STORYBOOK_MAPBOX_API_KEY || '',
            selectedUser: state.selectedUser
          }}
        />
        {state.paginatedResults.map((user, index) => {
          return (
            <UserCard
              key={`${user.id}-${index}`}
              {...{
                onClickEdit: () => {
                  openModal(true);
                  mutateStateKey('selectedUser', state.users[index]);
                  mutateStateKey('selectedUserIndex', index);
                },
                onClickDelete: () => {
                  mutateStateKey(
                    'users',
                    state.users.filter((user: any, userIndex: number) => index !== userIndex)
                  );
                },
                user
              }}
            />
          );
        })}
      </main>
      {state.filteredUsers.length > state.currentPage * 6 && (
        <div className="load__more">
          <Button
            onClick={() =>
              setState({
                ...state,
                currentPage: state.currentPage + 1
              })
            }
            variant="primary"
          >
            LOAD MORE
          </Button>
        </div>
      )}
    </StyledUserList>
  );
};

export default UsersLists;
