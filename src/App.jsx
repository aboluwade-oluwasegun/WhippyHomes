import Nav from "./Components/Header/Nav";
import Hero from "./Components/Header/Hero";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import WaitlistSection from "./Components/Waitlist/WaitlistSection";
function App() {
  async function postWaitList(data) {
    console.log(data);

    // try {
    //   const res = await axios.post(
    //     "https://whippy.onrender.com/api/save-wait-list",
    //     data
    //   );
    //   console.log(res);
    //   setIsSuccess(true);
    //   setTimeout(() => {
    //     setIsSuccess(false);
    //   }, 10000);
    // } catch (err) {
    //   console.log(err);
    // }
  }
  return (
    <div>
      <Nav />
      <Hero data={postWaitList} />
      <Features />
      <WaitlistSection />
      <Footer />
    </div>
  );
}

export default App;
