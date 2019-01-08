import React from 'react';
import { Aside } from './styles';
import Navbar from '../Navbar';

class Sidebar extends React.Component {
  render() {
    return (
      <Aside>
        <Navbar />
      </Aside>
    );
  }
}

export default Sidebar;
