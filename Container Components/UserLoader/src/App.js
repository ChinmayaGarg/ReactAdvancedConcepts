import { CurrentUserLoader } from './CurrentUserLoader';
import { UserLoader } from './UserLoader';
import { UserInfo } from './UserInfo';

const UserIds = ['123', '234', '345'];

function App() {
  return (
    <>
      {UserIds.map((id) => (
        <UserLoader userId={id}>
          <UserInfo />
        </UserLoader>
      ))}
    </>
  );
}

export default App;
