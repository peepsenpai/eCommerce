import React from 'react';
import ProtectedRoute from '../Protected/ProtectedRoute';

const Account = () => {
  return (
    <div>account</div>
  )
}

export default ProtectedRoute(Account);