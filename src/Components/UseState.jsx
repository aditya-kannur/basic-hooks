














































// import React, { useState } from 'react';

// function UseState() {


//     let [age, setAge] = useState(19)
//     let [sib, setSib] = useState(3)


//     return (
//         <div>
//             <h2>{age}</h2>
//             <h2>{sib}</h2>

//             <button onClick={() => setAge(age = age + 1)}>Age</button>
//             <button onClick={() => {setSib(sib = sib + 1)}}>Sib</button>
//         </div>
//     );
// }

// export default UseState;





















































// import React, { useState } from 'react';

// function UseState() {

//     const [name, setName] = useState({age:19, sib:7})


//     const IncAne = (key) => {
//         setName({
//             ...name, key:name.key + 1
//         })
//     }
//     const {age, sib} = name

//     return (
//         <div>
//             <h2>{name.age}</h2>
//             <h2>{name.sib}</h2>

//             <button onClick={() => {IncAge("age")}}></button>
//             <button onClick={() => {IncAge("sib")}}></button>
//         </div>
//     );
// }

// export default UseState;

















































// import { useState } from "react";
// import "../App.css"

// function UseState(){
//   const [Age, setAge] = useState(19)
//   const [Sib, setSib] = useState(0)

//   function Increement(){
//     setAge(Age+1);  
//   }

//   const IncreaseSib = () => {
//     setSib(Sib + 1)
//   }

//   return (
//     <>
//     <div>
//         <h2>{Age}</h2><h2>{Sib}</h2>

//         <button onClick={() => {Increement()}}>Age</button>
//         <button onClick={IncreaseSib}>Siblings</button>
//     </div>
//     </>
//   )
// }
// export default UseState;