import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import NavBarSimple from "./components/NavBarSimple";

import NavBarChild from "./components/NavBarChild";
import Content from "./components/Content";
import Loader from "./components/Loader";
import ContentHooks from "./components/ContentHooks";
// import PostItem from "./components/PostItem";
// <PostItem />

function App() {
  return (
    <div className={css.App}>
     <Sidebar />
     <NavBarForm />
     <NavBarSimple />
     
     <NavBarChild />
     <Content />
     <ContentHooks />
     <Loader />
      
    </div>
  );
}

export default App;