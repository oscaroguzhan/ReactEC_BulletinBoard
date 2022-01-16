import logo from "./assets/ozzylogo.png";
import BulletinBoard from "./Components/BulletinBoard";
function App() {
  // definera data
  const data = [
    {
      id: 1,
      question: "Vad är tre fördelar med använda React?",
      answers: [
        "It consist of components that has own state which allows user to interact with the application smoothly",
        "it is easy to develop new features in React without repeating the exisiting code and can render on server via Node",
        "Allows to create flexible and interactive User interfaces(UIs) that is easy to read and debug",
      ],
    },
    {
      id: 2,
      question:
        "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answers: [
        "Single Page application(SPA) consist of a single HTML file together with AJAX(Asynchronous Javascript and XML) to enable smooth and fast response so the user does not need to wait for every request.",
        "it is more responsive than ordinary webpages because SPA can retrieve all of applications parts such as HTML, JS, CSS on initial load or update dynamically with the user's interaction. On the other hand, ordinary webpages may need to wait for the parts or items that are linked to the application on separate HTML pages. "
      ],
    },
    {
      id: 3,
      question: "Nämn tre skillnader mellan React och Angular",
      answers: ["Layout- Angular framework based on 3 layers such as Models, Views, Controllers whereas React library based on components that has own state", 
      "Performance- Angular framework uses real DOM( is a programming interface that organize to HTML,XML,XHTML document in a form of tree) which refresh every time when a change is made whereas React uses virtual DOM (a virtual copy of the Real Dom) which is much faster and easier to manipulate", 
      "Data-binding- Angular uses 2-way binding approach that model state changes automatically every time a change is made in UI element or vice-versa whereas React uses 1-way approach where UI element only can be change when a change is made in the model state so it is more effective for the big projects that contains large amounts of code.", 
    ],
      
    }
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
        <BulletinBoard data={data} />
       
      </main>
    </div>
  );
}

export default App;
