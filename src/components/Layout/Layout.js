import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Navbar from "../Navigation/Navbar/Navbar";
import DropdownDrawer from "../../components/Navigation/DropdownDrawer/DropdownDrawer";

class Layout extends Component {
  state = {
    showDropdownDrawer: false
  };

  dropdownDrawerClosedHandler = () => {
    this.setState({
      showDropdownDrawer: false
    });
  };

  dropdownDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        showDropdownDrawer: !prevState.showDropdownDrawer
      };
    });
    console.log(`IVE BEEN CLICKED`);
  };

  render() {
    return (
      <Aux>
        <Navbar drawerToggleClicked={this.dropdownDrawerToggleHandler} />
        <DropdownDrawer 
          open={this.state.showDropdownDrawer}
          closed={this.dropdownDrawerClosedHandler} />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
