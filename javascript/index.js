// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//    getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//    getInstruction("mashedPotatoes", 1, (step2) => {
//      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//    }, (error) => console.log(error));
  
//    getInstruction("mashedPotatoes", 2, (step3) => {
//      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//    }, (error) => console.log(error));
  
//    getInstruction("mashedPotatoes", 3, (step4) => {
//      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//    }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));

  // getInstruction(
  //   "steak",
  //   0,
  //   (step1) => {
  //     document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  //     // ADD NEXT STEP HERE
  //     getInstruction(
  //       "steak",
  //       1,
  //       (step2) => {
  //         document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  //         getInstruction(
  //           "steak",
  //           2,
  //           (step3) => {
  //             document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  //             getInstruction(
  //               "steak",
  //               3,
  //               (step4) => {
  //                 document.querySelector(
  //                   "#steak"
  //                 ).innerHTML += `<li>${step4}</li>`;
  //                 getInstruction(
  //                   "steak",
  //                   4,
  //                   (step5) => {
  //                     document.querySelector(
  //                       "#steak"
  //                     ).innerHTML += `<li>${step5}</li>`;
  //                     // Bonus 1
  //                     document
  //                       .querySelector("#steakImg")
  //                       .removeAttribute("hidden");
  //                   },
  //                   (error) => console.log(error)
  //                 );
  //               },
  //               (error) => console.log(error)
  //             );
  //           },
  //           (error) => console.log(error)
  //         );
  //       },
  //       (error) => console.log(error)
  //     );
  //   },
  //   (error) => console.log(error)
  // );

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      getInstruction("mashedPotatoes", 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
          getInstruction("mashedPotatoes", 3, (step3) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
              getInstruction("mashedPotatoes", 4, (step4) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                document.querySelector("#mashedPotatoes").innerHTML += `<li>"Mashed potatoes are ready!</li>`;
                document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
              }, (error) => console.log(error))
          }, (error) => console.log(error))
      }, (error) => console.log(error))
  }, (error) => console.log(error))
  // 
    // ...
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction("steak", 0)
.then( (step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  return obtainInstruction("steak", 1);
})
obtainInstruction("steak", 2)
.then( (step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  return obtainInstruction("steak", 2);
})
.then( (step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  return obtainInstruction("steak", 3);
})
.then( (step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  return obtainInstruction("steak", 4);
})
.then( (step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  return obtainInstruction("steak", 5);
})
.then( (step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  return obtainInstruction("steak", 6);
})
.then( (step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  return obtainInstruction("steak", 7);
})
.then( (step8) => {
  document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
  document.querySelector("#steak").innerHTML += `<li>"Steak is ready!"</li>`;
  document.querySelector("#steakImg").removeAttribute("hidden");
})

//chuleta de Alejandro :)
// obtainInstruction("brusselsSprouts", 0)
//   .then((step1) => {
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
//     return obtainInstruction("brusselsSprouts", 1);
//   })
//   .then((step2) => {
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
//     return obtainInstruction("brusselsSprouts", 2);
//   })
//   .then((step3) => {
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
//     return obtainInstruction("brusselsSprouts", 3);
//   })
//   .then((step4) => {
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;
//     return obtainInstruction("brusselsSprouts", 4);
//   })
//   .then((step5) => {
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;
//     return obtainInstruction("brusselsSprouts", 5);
//   })
//   .then((step6) => {
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;
//     return obtainInstruction("brusselsSprouts", 6);
//   })
//   .then((step7) => {
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;
//     return obtainInstruction("brusselsSprouts", 7);
//   })
//   .then((step8) => {
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${step8}</li>`;
//     document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//   });
// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  const step1 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  const step2 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  const step3 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  const step4 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  const step5 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  const step6 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  const step7 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>"Broccoli is ready!"</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
  
  
}

makeBroccoli()
// Bonus 2 - Promise all

const p1 = obtainInstruction("brusselsSprouts", 0);
const p2 = obtainInstruction("brusselsSprouts", 1);
const p3 = obtainInstruction("brusselsSprouts", 2);
const p4 = obtainInstruction("brusselsSprouts", 3);
const p5 = obtainInstruction("brusselsSprouts", 4);
const p6 = obtainInstruction("brusselsSprouts", 5);
const p7 = obtainInstruction("brusselsSprouts", 6);
const p8 = obtainInstruction("brusselsSprouts", 7);

Promise.all([p1, p2, p3, p4, p5, p6, p7, p8]).then( value => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[0]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[1]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[2]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[3]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[4]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[5]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[6]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[7]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>"Brussels sprouts are ready! yuuhuuu Lo conseguí!"</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})

