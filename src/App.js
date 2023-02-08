import Form from "./Components/Form";
import Signup from "./Components/Signup";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<Form />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  )
}

export default App;
