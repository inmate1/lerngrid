// function isNumberInRange(start, end, number) {
//   // const value = number >= start && number <= end;
//   if (number >= start && number <= end) {
//     return true;
//   }
//   else {
//     return false;
//   }
//   // return value
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

// function checkAccess(subType) {
//   if (subType == "pro" || subType == "vip") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAccess('pro'));
// console.log(checkAccess('starter'));
// console.log(checkAccess('vip'));
// console.log(checkAccess('free'));

// function toggleModalVisibility(isVisible) {
//   const isOpenModal = !isVisible;
//   if (isOpenModal) {
//     return isOpenModal;
//   } else {
//     return isOpenModal;
//   }
// }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// const message = 'JavaScript is awesome';
// console.log(message.toUpperCase());


// function getSubstring(string, length) {
//     const newString = string.slice(0, length);
//     return newString;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 8));
// console.log(1 && 2);
// console.log(1 || 2);


// function normalizeInput(input, to) {
  
//     const randomOutput = to === 'upper' ? input.toUpperCase() : input.toLowerCase();
//     // console.log(randomOutput);
//     return randomOutput;
// }

// const res = normalizeInput("This ISN'T SpaM", 'lower');
// console.log("result:", res);


// const username = 'Jacob Mercer';

// console.log(username.includes('Jacob')); // true
// console.log(username.includes('John')); // false


// function checkForName(fullName, firstName) {
//     const lowerFullName = fullName.toLowerCase();
//     const lowerFirstName = firstName.toLowerCase();
//     const hasFirstName = lowerFullName.includes(lowerFirstName);
//    console.log(lowerFullName.includes(lowerFullName));
// //     console.log(lowerFullName);
// //     console.log(lowerFirstName);
// //      console.log(hasFirstName);
//     return hasFirstName;
   
// }
// // const outIncludes = checkForName('Jason Neis', 'Jason');
// // console.log(outIncludes);
// // console.log(checkForName('Jason Neis', 'jAsOn'));
// // console.log(checkForName('Caty Stars', 'cAtY'));
// console.log(checkForName('Caty Stars', 'Andromeda'));

                            //    Методы startsWith()иendsWith()

// function checkFileExtension(fileName, ext) {
//     const hasMatches = true === fileName.endsWith(ext)
//         ? 'File extension matches'
//             : 'File extension does not match';
//     console.log(fileName.endsWith(ext));
//     return hasMatches;
// }
// console.log(checkFileExtension('app.js', '.js'));
// console.log(checkFileExtension('index.html', '.css'));



                        //    Метод  indexOf();
 
// function getFileName(file) {
//     const dotExtension = file.indexOf(".");
//     const hasNoDot = dotExtension === -1 ?  file : file.slice(0, dotExtension);
//     return hasNoDot;
//     // if (dotExtension === -1) {
//     //     return file;
//     // } else {
//     //     return file.slice(0, dotExtension);
//     // }
// }
// console.log(getFileName('styles.css'));
// console.log(getFileName('app.js'));
// console.log(getFileName('app'));

                     //  Метод  trim();
    
// function createFileName(name, ext) {
//     const fullFileName = `${name.trim()}.${ext}`;
//     return fullFileName;
// }
// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));
