import reactImg from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcept.jsx"




function App() {
  return (
    <div>

      <header>
        <h1>
        Shiran

        </h1>
        
      </header>

      <Header/>

      <main>

        <section id="core-concepts">
        <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}

            <CoreConcept 
                  title = {CORE_CONCEPTS[0].title} 
                  description = {CORE_CONCEPTS[0].description} 
                  img = {CORE_CONCEPTS[0].image} 
            
            />

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
