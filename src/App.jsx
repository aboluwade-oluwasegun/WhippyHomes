import { useState } from "react";
import "./App.scss";
import axios from "axios";
import Features from "./Components/Feature";
import Footer from "./Components/Footer/Footer";
import WaitlistSection from "./Components/Waitlist";
import SuccessModal from "./Components/SuccessModal";
import { Hero, Nav } from "./Components/Header";
function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  const closeModal = () => {
    setIsSuccess(false);
  };
  async function postWaitList(data) {
    console.log(data);

    try {
      const res = await axios.post(
        "https://whippy.onrender.com/api/save-wait-list",
        data
      );
      console.log(res);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      {isSuccess && <SuccessModal onCloseModal={closeModal} />}
      <Nav />
      <Hero data={postWaitList} />
      <Features />
      <WaitlistSection />
      <Footer />
    </div>
  );
}

export default App;
