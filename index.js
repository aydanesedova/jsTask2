// 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.

// let a = 2;
// let b = -3;
// let c = 1;

// let D = b ** 2 - 4 * a * c;
// console.log(D); "bu log sadəcə Diskriminantı yoxlamaq üçündür"
// if (D > 0) {
//     let x1 = (-b + 1) / (2 * a);
//     let x2 = (-b - 1) / (2 * a); 
//     console.log(`Iki həll var`);
// } else if (D == 0) {
//     const x1 = -b / (2 * a);
//     console.log(`Bir tək həll var`);
// } else {
//     console.log("Həll yoxdur, diskriminant mənfi ədəddir.");
// }






//2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.
// const a = 5;
// const numbers = [];

// for (let i = 1; i <= 1000; i++) {
//   if (i % 5 === 0) {
//     numbers.push(i);
//   }
// }

// console.log(numbers);






// 4. const arr = [2, 4, 5, 9, 1]; Bu massivin max elementini tapın: 
// const arr = [2, 4, 5, 9, 1];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log("Max element:",max);





// 3. Bu massivin min elementini tapın
// const arr = [2, 4, 5, 9, 1]; 
// let min = arr [0];

// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min= arr[i];
//     }
    
// }
// console.log("Min element:",min);






// 5. Bu massivin minimum elementinin indeksini tapın. 
// const arr = [2, 4, 5, 9, 1]; 
// let min = arr [0];


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min){
//        min = arr[i]
//     }
    
// }
// let minIndex = arr.indexOf(arr);
// console.log(minIndex);
// ******************************************************************
// II usul
// const arr = [2, 4, 5, 9, 1];
// let lastIndex = arr.lastIndexOf(1);
// console.log(lastIndex);





// 6. Bu massivin max elementinin indeksini tapın. 
// const arr = [2, 4, 5, 9, 1];
// let max = [0];


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//        max = arr[i]
  
//     }
    
// }
// let maxIndex = arr.indexOf(max);
// console.log(maxIndex);
// ******************************************************************
// II usul
// const arr = [2, 4, 5, 9, 1];
// let lastIndex = arr.lastIndexOf(9);
// console.log(lastIndex);





// 7. Tək indeksli massiv elementlərinin cəmini hesablayın
// const arr = [2, 4, 5, 9, 1];
// let tekIndex = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==1) {
//         tekIndex+=arr[i]
       
//     }
    
// }
// console.log("Tək indeksli massiv elementlərinin cəmi", tekIndex);






// 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.
// let a=" Mən Code Academy Tələbəsiyəm."
// console.log(a.toLowerCase());






// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "
// let a="            Mən Code Academydə Programing tədrisi alıram            ";
// console.log(a.trim());





// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın
// let a = "Mən Code Academy Tələbəsiyəm.";
// let b = a.split(" ");

// for (let i = 0; i < b.length; i++) {
//   console.log(b[i]);
// }





// 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.
// let a = "Mən Code Academydə Programing tədrisi alıram";
// console.log("Cumledeki herf sayi:",a.replace(/ /g, "").length);