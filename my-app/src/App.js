import css from './App.module.css';
// import Sidebar from "./components/Sidebar";
// import NavBarForm from "./components/NavBarForm";
// import NavBarSimple from "./components/NavBarSimple";
// import PostItem from "./components/PostItem";
// import NavBarChild from "./components/NavBarChild";
import Content from "./components/Content";
import Loader from "./components/Loader";

//  <Sidebar />
//  <NavBarForm />
//  <NavBarSimple />
//  <PostItem />
//  <NavBarChild />
//  <Loader />
//  <Content />

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Content />
      <Loader />
      
    </div>
  );
}

export default App;