import reactImg from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from "./data.js";

const reactDescriptions = ['Fundamental','Crucial','Core'];


function getRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}


function Header() {

  const description =reactDescriptions[getRandomInt(2)];


  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props){
  return(
    <li>
        <img src={props.img} alt ={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
  );
}

// function CoreConcept({images,title,description}){
//   return(
//     <li>
//         <img src={images} alt ={title}/>
//         <h3>{title}</h3>
//         <p>{description}</p>
//     </li>
//   );
// }

function App() {
  return (
    <div>
      <Header/>
      <main>

        <section id="core-concepts">
        <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />

            <CoreConcept 
                  title = {CORE_CONCEPTS[1].title} 
                  description = {CORE_CONCEPTS[1].description} 
                  img = {CORE_CONCEPTS[1].image} 
            
            />

            <CoreConcept 
                  title = {CORE_CONCEPTS[2].title} 
                  description = {CORE_CONCEPTS[2].description} 
                  img = {CORE_CONCEPTS[2].image} 
            
            />

            <CoreConcept 
                  title = {CORE_CONCEPTS[3].title} 
                  description = {CORE_CONCEPTS[3].description} 
                  img = {CORE_CONCEPTS[3].image} 
            
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
