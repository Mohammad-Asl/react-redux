// import CakeContainer from "./components/CakeContainer";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import "./App.css";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import HooksIceCreamContainer from "./components/HookIceCreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";
// import CounterContainer from './components/CounterContainer'
// import Counter from "./reduxToolkit/features/counter/Counter";
import PostsList from "./reduxToolkit/features/posts/PostsList";

function App() {
  return (

      <div className="cake">
        {/* <CakeContainer />
        <HooksCakeContainer /> */}
        {/* <ItemContainer cake/>
        <ItemContainer /> */}
        {/* <IceCreamContainer />
        <HooksIceCreamContainer/>
        <NewCakeContainer /> */}
        {/* <CounterContainer /> */}
        {/* <Counter /> */}
        <PostsList />
      </div>

  );
}

export default App;
