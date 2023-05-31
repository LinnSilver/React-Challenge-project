import css from './App.module.css';
// import Sidebar from "./components/Sidebar";
// import NavBarForm from "./components/NavBarForm";
// import NavBarSimple from "./components/NavBarSimple";
import PostItem from "./components/PostItem";

//  <Sidebar />
//  <NavBarForm />
//  <NavBarSimple />

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <PostItem />
      
    </div>
  );
}

export default App;