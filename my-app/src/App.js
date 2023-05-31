import css from './App.module.css';
// import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple";
// import NavBarForm from "./components/NavBarForm";

// <Sidebar />
//   <NavBarForm />

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarSimple />
    
    </div>
  );
}

export default App;