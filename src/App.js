import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/commons/header/header.component.jsx";
import HomePage from "./pages/homepage-component/homepage.component.jsx";
import SignInAndSignUp from "./pages/signin-signup/signin-signup.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import { auth, checkUserAuth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  constructor() {
    super();
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await checkUserAuth(user);
        try {
          userRef.onSnapshot((snapshot) => {
            console.log(snapshot);
            setCurrentUser({
              id: snapshot.id,
              exists: snapshot.exists,
              showHeader: true,
              ...snapshot.data(),
            });
          });
        } catch (err) {
          console.log(err.message);
        }
      } else {
        setCurrentUser({
          showHeader: true,
        });
      }
      setCurrentUser(user);

      // else {
      //   setCurrentUser({
      //     showHeader: true,
      //   });
      // }
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
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
