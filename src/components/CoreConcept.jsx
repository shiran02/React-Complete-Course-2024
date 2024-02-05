export default function CoreConcept(props){
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