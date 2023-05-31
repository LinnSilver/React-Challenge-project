import css from './App.module.css';
// import Sidebar from "./components/Sidebar";
// import NavBarForm from "./components/NavBarForm";
// import NavBarSimple from "./components/NavBarSimple";
// import PostItem from "./components/PostItem";
import NavBarChild from "./components/NavBarChild";

//  <Sidebar />
//  <NavBarForm />
//  <NavBarSimple />
//  <PostItem />

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarChild />
      
    </div>
  );
}

export default App;