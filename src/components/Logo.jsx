import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/60/60736.png"
        alt="Logo"
        style={{ width }}
      />
    </div>
  );
}

export default Logo;
