// const num1 = [1, 2, 3]
// const num2 = [4, 6, 7]

// const resul = []

// let index1 = 0
// let index2 = 0

// while (index1 < num1.length || index2 < num2.length){
//     if (num1[index1] <= num2[index2]){
//         resul.push(num1[index1])
//         index1 += 1
//     }
//     else if (num1[index1] > num2[index2] || num1.length){
//         resul.push(num2[index2])
//         index2 += 1
//     }
// }

// console.log(resul)

// const num1 = [1, 2, 3]
// const num2 = [4, 6, 7]
// let resul = []
// resul = resul.concat(num1, num2)
// resul = resul.sort()
// console.log(resul)

// const nums = [1, 2, 3, 3]
// let target = 4
// for (let i = 0; i < nums.length; i++){
//     for (let j = i + 1; j < nums.length; j++){
//         if (nums[i] + nums[j] == target){
//             console.log([i,j])
//         }
//     }

// }

// function isPalindrome(value){
//     let strValue = String(value)
//     for (let i = 0; i < strValue.length / 2; i++){
//         if (strValue[i] != strValue[strValue.length - i - 1]){
//             return false
//         }
//     }
//     return true
// }

// const value = 121
// console.log(isPalindrome(value))


// function GerlongestPrefix(strs){
//     let shortestWold = strs.sort((a, b) => a.length - b.length)[0]
//     let resul = ""
//     for (let i = 0; i < shortestWold.length; i++){
//         for (let j = 1; j < strs.length; j++){
//             if (strs[j][i] != shortestWold[i]) return resul
//         }
//         resul += shortestWold[i]
//     }
//     return resul
// }
// const strs = ["flower", "flow", "flight"]
// console.log(GerlongestPrefix(strs))


// let s = "Hello Daniil World"
// let list = s.split(" ")
// console.log(list[1].length)

// console.log(10 + 20 + 30 + 40 + 50 + 60 + 70 + 80 + 90 + 100)


// for (let i = 1; i <= 9; i += 2){
//     console.log(i)
// }

// for (let j = 9; j >= 1; j -= 2){
//     console.log(j)
// }


// for (let i = 0; i < num; i++){
//     console.log(num)
// }

// for (let i = 11; i <= 99; i += 11){
//     console.log(i)
// }

// a = 3
// b = 12
// for (let i = a; i <= b; i += 1){
//     if (i % 2 == 0){
//         console.log(i)
//     }
    
// }


// a = 12
// b = 3
// for (let i = a; i >= b; i -= 1){
//     if (i % 3 == 0){
//         console.log(i)
//     }
// }

// for (let i = 10; i <= 20; i += 1){
//     if (i % 2 == 0){
//         console.log(i * i)
//     }
// }


// sum = 0 
// for (let i = 10; i <= 50; i += 1){
//     sum += i
// }
// console.log(sum)

// let sum = 0
// for (let i = 10; i <= 50; i += 1){
//     if (i % 5 == 0){
//         sum += i
        
//     }
// }
// console.log(sum)

// let sum = 1
// for (let i = 23; i <= 297; i += 1){
//     if (i % 13 == 0){
//         sum *= i
        
//     }
// }
// console.log(sum)


// let arr = [5, 6, 3, 3, 1]
// let sum = 1
// for (let i = 0; i <  arr.length; i++){
//     if (arr[i] % 3 == 0){
//         sum += arr[i]
//     }
        
// }
// console.log(sum)

// let arr = [5, 6, 2, 8, 1]
// let sum = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0){
//         sum += arr[i]
//     }
// }
// console.log(sum)

// let arr = []

// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0){
//         arr.push(i)
//     }
// }
// console.log(arr)

// let arr = []

// for (let i = 1; i <= 10; i++){
//    arr.push(i)
// }
// arr.splice(2, 1)
// console.log(arr)


// let arr = [1, 2, 3, 4, 5]
// for (let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i])
// }


// let arr = [1, 2, 3, 4, 5]
// for (let i = arr.length - 1; i >= 0; i--){
//     if (i % 2 == 0){
//         console.log(arr[i])
// }
// }
        

// let arr = []
// for (let i = 0; i <= 20; i++){
//     if (i % 3 == 0 ){
//         arr.push(i)
        
//     }
// }
// console.log(arr)


// let arr = [2, 2, 3, 3, 4, 5]
// let resul = []
// let last_element = 0
// for (let i = 0; i < arr.length; i++){
//     if (resul.length == 0 || arr[i] > last_element){
//         resul.push(arr[i])
//         last_element = arr[i]
//     }
// }
// console.log(resul)

// let arr = []
// let a = 1
// let b = 10
// let sum = 0
// for (let i = a; i <= b; i++){
//     arr.push(i * i)
//     sum += i * i
// }
// console.log(arr)
// console.log(sum)

// let a = 6
// console.log("x + a = 0")
// console.log("x = " + -a )

// let V = 120
// let T = 30
// console.log("автомобиль проедет " +  V * T + " км")


// const arr = [1, 4, 3, 2, 5];
// let isSorted = true;
// for (let i = 0; i < arr.length-1; i++){
//     if (arr[i] > arr[i+1]){
//         isSorted = false;
//         break;
//     }
// }
// console.log(isSorted);


// let arr = ["Привет", "Привет"]
// let has = false
// let word = "мир"
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === word){
//         has = true
//     }
// }
// console.log(has)


// let arr = [3, 5, -1, 2, 3, 0, -4, -6]
// let pluse = 0
// let mines = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         pluse += 1
//     }
//     if (arr[i] < 0){
//         mines += 1
//     }
// }
// console.log("Положительных: " + pluse)
// console.log("Отрицательных: " + mines)


// let arr = [4, 3, 6, 9, 0, 2, 4, 0]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 0){
//         arr[i] = arr[i-1] + arr[i-2]
//     }
// }
// console.log(arr)


// let num = [1, 4, 6, 8, 7]
// let resul = 0
// for (let i = 0; i < num.length; i++){
//     resul += num[i]

// }
// console.log(resul / num.length)


// let number =  5
// let line = `Число: ${number} км/ч`
// console.log(line)   

// let line = "Hello world"

// let arr = line.split(" ")
// console.log(arr)

// let line = "Hello world"

// let arr = line.replaceAll("o", "gfgzdgdg")
// console.log(arr)


// let line = "13:4"
// let data = line.split(":")
// let hours = Number(data[0])
// let minutes = Number(data[1])
// console.log(hours * 3600 + minutes * 60)


// let line = "{key: value}"
// line = line.slice(1, line.length-1)
// let data = line.split(": ")
// console.log(data)

// let line = "Hello world"
// let glas = "eyuoa"
// let count = 0
// for (let i = 0; i < line.length; i++){
//     if (glas.includes(line[i])){
//         count += 1
//     }
// }
// console.log(count)


// let line = "Hello world"
// let letter = Math.floor(line.length / 2)
// console.log(line[0], line[letter] ,line[line.length -1])

// let line = "adadfkd"
// let index = line[line.length - 1]
// for (let i = 0; i < line.length; i++){
//     if (line[i] == index){
//         console.log(i)
//     }
// }

// let line = "agrgds"
// for (let i = 0; i < line.length; i++){
//     if (i % 3 == 0){
//         console.log(line[i + 2])
//     }
// }


let line1 = "abc"
let line2 = "abcde"
let biggerline = ""
let diff = 0
if (line1.length > line2.length){
    biggerline = line1
    diff = line1.length - line2.length
}

else{
    biggerline = line2
    diff = line2.length - line1 .length
}
for (let i = 0; i < diff; i++){
    console.log(biggerline)
}