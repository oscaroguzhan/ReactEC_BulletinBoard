import logo from "./assets/ozzylogo.png";
import BulletinBoard from "./Components/BulletinBoard";
function App() {
  // definera data
  const data = [
    {
      id:1,
      question: "Vad är tre fördelar med använda React?",
      answers: ["lorem1", "lorem2", "lorem3"],
    },
    {
      id:2,
      question:
        "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answers:
        ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sunt dolore alias ex eligendi dolores beatae. Quisquam quam maxime"],
    },
    {
      id:3,
      question: "Nämn tre skillnader mellan React och Angular",
      answers: ["answer1", "answer2", "answer3"],
    },
  ];
  return (
    <div className="container">
      {/*  header section*/}
      <header>
        <div className="logo">
          <img src={logo} alt="logo picture" />
        </div>
        <div className="title">
          <h1>Bulletin Board App</h1>
        </div>
      </header>
      {/* main content section */}
      <main>
        <BulletinBoard data={data}/>
      </main>
    </div>
  );
}

export default App;
