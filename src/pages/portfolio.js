import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Project from '../components/project';
import Footer from '../components/footer';

export default class PortfolioPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}
