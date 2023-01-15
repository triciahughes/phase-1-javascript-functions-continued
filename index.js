// code your solution here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");

function mondayWork(anything = "go to the office") {
  return `This Monday, I will ${anything}.`;
}

function wrapAdjective(flare) {
  if (flare === "*") {
    return (special) => {
      return `You are ${flare}${special}${flare}!`;
    };
  }
  if (flare === "||") {
    return (special) => {
      return `You are ${flare}${special}${flare}!`;
    };
  }
}
//   (special) => {
//     return `You are ${flare}${special}!${flare}`;
//   };
// }
// wrapAdjective("*", "special");
