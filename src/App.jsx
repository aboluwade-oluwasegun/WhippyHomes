import { useState } from "react";
import axios from "axios";
import Nav from "./Components/Header/Nav";
import Hero from "./Components/Header/Hero";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import WaitlistSection from "./Components/Waitlist/WaitlistSection";
import SuccessModal from "./Components/SuccessModal/SuccessModal";
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
