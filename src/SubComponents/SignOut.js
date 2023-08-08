import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from './authSlice';

const SignOut = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // Perform signout logic, e.g., clearing local storage or authentication token
    // Then dispatch clearUser action to update the store
    dispatch(clearUser());
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;