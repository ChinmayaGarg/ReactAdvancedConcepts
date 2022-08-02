import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';

// Here, even though there is no props that we can see, our CurrentUserLoader component is going to pass a user prop to our userInfo component,
// just because UserInfo is one of its children.
function App() {
  return (
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
}

export default App;
