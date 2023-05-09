import Landing from "./Components/Landing"
import About from "./Pages/About"
import Contacts from "./Pages/Contacts"
import Features from "./Pages/Features"
import Feedbacks from "./Pages/Feedbacks"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-700 text-black">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Feedbacks" element={<Feedbacks />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
