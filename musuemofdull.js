// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

function removeSmallest(numbers) {
// We create the nums array, we will use this array at the end of the code, this will serve as the unaltered numbers array. The other arrays that we will use are going to be mutated because of the splice functions. We assign another array arr1, and use the for loop and then the function sort with return to arrange the numbers in ascending order so that we can be sure that when we assign the lowest variable it will be at index 0, and count how many lowest number is present in the numbers array. Then we assign a counter variable and use the for loop with a nested if setting the condition that if it equals the lowest the counter variable will increment. Then another counter1 variable then using a for loop through the numbers array then a nested if, if it detects that an element is equal to the lowest, the counter1 will increment and use the splice function to replace that number with a single space as to not alter the length of the numbers array. Then we nest another if inside for the counter1 when it reaches the counter-2 value it will break so that one lowest rated element will be left, not all lowest numbers will be spliced. Then we use the split and join functions to so that all commas will be ommited. Then we use a for loop and make an array thearr, pushing all elements if it is not a space, then using the parseInt function to convert it back to a number type.
      let nums = []
      for(i=0; i<=numbers.length-1; i++){
        nums.push(numbers[i])
      }

      let arr1 = []
      for(i=0; i<=numbers.length-1; i++){
        arr1.push(numbers[i])
      }
      arr1.sort(function(a, b){return a-b});
      let lowest = arr1[0]
      
      let counter = 0
      for(i=0; i<=numbers.length-1; i++){
        if(lowest == numbers[i]){
          counter++
        }
      }
      
      let counter1 = 0
      for(i=0; i<=numbers.length-1; i++){
        if(numbers[i] == lowest){
          // console.log(numbers[i], i)
          numbers.splice(i,1,'')
          if(counter1 == counter-2){
            break
          }
          counter1++
          // console.log(`counter1 ${counter1}`)
        }
      }
      // console.log(counter1)
      // console.log(counter)
      // console.log(numbers)
      
      let newarr = numbers.toString().split(',').join(' ')
      // console.log(newarr)
      // console.log(newarr.length)
      
      let thearr = []
      for(i=0; i<=newarr.length-1; i++){
          if(newarr[i] != ' '){
              thearr.push(parseInt(newarr[i]))
          }
      }
      console.log(`Items:\n${nums}\nLowest Rated items removed:\n${thearr}`)  

}
removeSmallest([1,2,3,4,5])
console.log('========')
removeSmallest([5,3,2,1,4])
console.log('========')
removeSmallest([2,2,1,2,1])
console.log('========')
removeSmallest([5,3,2,2,1,4,1,1,1,1,1,1])