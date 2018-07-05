function printItems(array) {

    array.forEach((item) => {
        if (Array.isArray(item)) {
            printItems(item);
        } else {
            console.log(item);
        }
    });
  }

// function printItems(array) {
//     while (array.length > 0) {
//       const element = array.shift();
  
//       if (Array.isArray(element)) {
//         element.reverse().forEach((newElement)=> {
//           array.unshift(newElement);
//         });
//       } else {
//         console.log(element);
//       }
//     }
//   }
  
  const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
  printItems(array);