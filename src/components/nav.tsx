import React from 'react'

interface Props {
    text?:string;
    id?: number;

}

export const Nav: React.FC<Props> = () => {
  return (
    <nav>
    </nav>
  )
};

Nav.propTypes = {}
