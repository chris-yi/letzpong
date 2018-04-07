import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/LandingPage/LandingPage";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <LandingPage />
        </Layout>
      </div>
    );
  }
}

export default App;
