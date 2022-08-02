// The name of file is currentUserLoader because, this file will take care to load the data of the current user.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// children props is the keyword which contains all of the components that are inside the opening and closing tags of the Component (here component is CurrentUserLoader and the children props will be components inside it, which are in App.js)
export const CurrentUserLoader = ({ children }) => {
  // loading data inside CurrentUserLoader component from the server
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/current-user');
      console.log('response', response);
      setUser(response.data);
    })();
  }, []);

  // returning/sending data in the child components
  // React.Children provides utilities for dealing with the this.props.children opaque data structure. (https://reactjs.org/docs/react-api.html)
  // In first parameter, it takes in all the children of the component and calls the function in second parameter for every children.
  // React.isValidElement: checks if it is valid element or not
  // React.cloneElement: React.cloneElement(element,[config],[...children]) Clone and return a new React element using element as the starting point. config should contain all new props, key, or ref. The resulting element will have the original element’s props with the new props merged in shallowly. New children will replace existing children. key and ref from the original element will be preserved if no key and ref present in the config.
  // (https://reactjs.org/docs/react-api.html)
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
