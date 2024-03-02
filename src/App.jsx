
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcept.jsx"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import {EXAMPLES} from './data.js';






function App() {

 // const stateArray =   useState('please click a button');
  const [selectedTopic ,setSelectedTopic] =   useState('components');

  let tabContent = 'please click button';

  function handleSelect(selectedButton) {
    //console.log('Hello World - selected!');
    
    
    //tabContent = selectedButton;
    setSelectedTopic(selectedButton)
    console.log(tabContent);
  }

  console.log('App Component execution');

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


        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id ="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
        
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
