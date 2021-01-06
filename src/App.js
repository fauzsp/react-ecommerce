import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./components/commons/header/header.component.jsx";
import HomePage from "./pages/homepage-component/homepage.component.jsx";
import SignInAndSignUp from "./pages/signin-signup/signin-signup.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import CheckOutPage from "./pages/checkout/checkout.component.jsx";
import { auth, checkUserAuth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  constructor() {
    super();
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userRepo) => {
      if (userRepo) {
        const userRef = await checkUserAuth(userRepo);
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
      setCurrentUser(userRepo);
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
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to={"/"}></Redirect>
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
