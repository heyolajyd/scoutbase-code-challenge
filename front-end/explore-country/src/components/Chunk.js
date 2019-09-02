import React from 'react';

const Loader = (props) => {
  const { loading } = props;

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {props.children}
    </div>
  )
}

export default Loader;