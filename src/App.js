import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/commons/header/header.component.jsx";
import HomePage from "./pages/homepage-component/homepage.component.jsx";
import SignInAndSignUp from "./pages/signin-signup/signin-signup.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import { auth, checkUserAuth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      showHeader: false,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await checkUserAuth(user);
        console.log(userRef, "hello");
        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
              showHeader: true,
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({
          showHeader: true,
        });
        console.log(this.state, "user does not exist");
      }
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.showHeader !== this.state.showHeader) {
  //     console.log("status changed");
  //   } else {
  //     console.log("status not changed");
  //   }
  // }
  render() {
    const handleClick = (e) => {
      auth.signOut();
      window.location.reload();
    };
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          showHeader={this.state.showHeader}
          handleClick={handleClick}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
