import Sidebar from "./components/sidebar/sidebar"
import Main from "./components/Main/Main"
import { useState } from "react"
import LoginForm from "./components/Main/LoginForm";

function App() {

  const [isLogin , setLogin]=useState(false);

  const [username,setusername]=useState("");

  const handleLoginSuccess=(name)=>{
    setusername(name);
    setLogin(true);
  }

  
  return (
    <>
      {isLogin ? (
        <>
          <Sidebar />
          <Main username={username}/>
        </>
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;

