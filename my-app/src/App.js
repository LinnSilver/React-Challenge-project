import css from './App.module.css';
// import Sidebar from "./components/Sidebar";
// import NavBarForm from "./components/NavBarForm";
// import NavBarSimple from "./components/NavBarSimple";
// import PostItem from "./components/PostItem";
// import NavBarChild from "./components/NavBarChild";
// import Loader from "./components/Loader";
import Content from "./components/Content";

//  <Sidebar />
//  <NavBarForm />
//  <NavBarSimple />
//  <PostItem />
//  <NavBarChild />
//  <Loader />

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Content />
      
    </div>
  );
}

export default App;