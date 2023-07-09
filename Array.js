// array -> [] массивы

// let arr =[2,5,7,11,25,8,1,3,10,4,12,6,35,36,45]
// console.log(arr.sort((a,b) =>{
//     return a-b
// }))

// let arr = [1,3,6,7,10]
// // // console.log(arr.concat(20))
// arr.splice(1, 0,2)
// arr.splice(3,0,4)
// arr.splice(4,0,5)
// arr.splice(7,0,8)
// arr.splice(8, 0, 9)
// console.log(arr)

// let arr = [123, 'str', true, false, [12,false],'qwerty']
// arr.splice(0,0,'IT Academy', 23, true)
// console.log(arr)

// arr.unshift('motion')
// arr.shift()
// arr.shift()
// arr.push(true,false)
// arr.pop()
// arr.pop()
// console.log(arr.slice(0,3))

// arr.pop()
// console.log(arr)
// console.log(arr.pop())
// console.log(arr.shift())
// console.log(arr)
// console.log(arr[0])


// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ['a', 'b', 'c']
// arr.push(1,2,3)
// console.log(arr)

// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr = [1,2,3]
// let arr1 =[4,5,6]
// console.log(arr.concat(arr1))

// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1,2,3]
// arr.push(4,5,6)
// console.log(arr)

// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1,2,3]
// arr.unshift(4,5,6)
// console.log(arr)

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr =['js', 'css', 'jq']
// console.log(arr.shift())

// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr =['js', 'css', 'jq']
// console.log(arr.pop())

// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let arr =[1, 2, 3, 4, 5]
// console.log(arr.slice(0,3))

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr =[1, 2, 3, 4, 5]
// console.log(arr.slice(3))

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr =[1, 2, 3, 4, 5]
// arr.splice(1,2)
// console.log(arr)

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr =[1, 2, 3, 4, 5]
// console.log(arr.splice(1,3))

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr =[1, 2, 3, 4, 5]
// arr.splice(3,0,'a','b', 'c')
// console.log(arr)

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr =[1, 2, 3, 4, 5]
// arr.splice(1,0,'a','b')
// arr.splice(6,0,'c')
// arr.splice(8,0,'e')
// console.log(arr)

// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let arr = [3, 4, 1, 2, 7]
// console.log(arr.sort())

// 14 биринчи элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9]
// console.log(array.shift())

// 15 акыркы элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9]
// console.log(array.push())



// MAP
// let arr =[10,20,30,40,50]
// //
// console.log(arr.map(function (el,idx,array){
//     if (idx%2===0){
//         return el*2
//     }else {
//         return  el
//     }
// }))

// FILTER
// let arr = [10,20,30,40,50]
// console.log(arr.filter((el,idx,array) => {
//     return el<50 && el>20
// }))








// Во всех задачах используйте только методы map, filter.

// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
// let arr =[315, 64, 75, 43, 65, 63]
// console.log(arr.map(el =>{
//     return el+el
// }))

// // 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// let arr =['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.map(el =>{
//     return el.toUpperCase().replace(/А/g, 'я')
// }))

// let str ='Аскар'
// console.log(str.toLowerCase().replaceAll('а', 'я'))
// console.log(str.toLowerCase().replace(/а/g, 'z'))

// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.
// let arr =['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.filter(el =>{
//     return el.toLowerCase().includes('к')
// }))

// function task3(arr){
//     return arr.filter(el=>{
//        return el.includes('к')
//     })
// }
//
// console.log(task3(['Аскар', 'Баяман', 'Калмамат']))


// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
// let arr =[4, 54, 49]
// console.log(arr.map(el =>{
//     return el**el
// }))

// 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// let arr=[3134, 4, -143, -245, -214]
// console.log(arr.filter(el=>{
//     return el<0
// }))

// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let arr =[3, 51, 30, 54, 60]
// console.log(arr.filter(el =>{
//     return el%2===0
// }))

// 7. Вам дан массив ['Бегимай','Саша', 'Баяман', 'Калмамат', 'Bob']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let name =['Бегимай','col', 'Баяман', 'Калмамат', 'bob']
// console.log(name.filter((el) =>{
//     return el.length>5
// }))

// 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.

// let arr=[-13, 96, -41, -28, 40]
// console.log(arr.filter(el =>{
//     return el<0
// }).length)

// 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа. Затем извлеките квадратный
// корень из этих чисел, если эти числа больше 30.

// let arr =[3, 51, -30, -54, 60]
// console.log(arr.filter(el =>{
//     return el>30
// }).map(el =>{
//     return el**2
// }))

// 10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.

// let arr=[55, 44, 55, 44, 15, 49]
// console.log(arr.filter(el =>{
//     return arr.indexOf(el)=== arr.lastIndexOf(el)
// }))

//второй способ

// let arr=[55, 44, 55, 44, 15, 49]
// let array =[...new Set(arr)]
// console.log(array)


// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию, которая очищает массив от
// ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
//

// let arr =[NaN, 0, 77, false, -17, '',undefined, 99, null]
// console.log(arr.filter(el =>{
//     return el
// }))


// function myFunc(arr){
//     return arr.filter(el =>{
//         return !!el
//     })
// }
// console.log(myFunc([NaN, 0, 77, false, -17, '',undefined, 99, null]))
// второй спосо
// let arr=[NaN, 0, 77, false, -17, '',undefined, 99, null]
// let filtered = arr.filter(Boolean)
// console.log(filtered)
// третий способ
// let arr=[NaN, 0, 77, false, -17, '',undefined, 99, null]
// let filtered = arr.filter(x => x)
// console.log(filtered)

// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.
// let arr =['Бегимай', 'Баяман', 'Калмамат']
// console.log(arr.map(el =>{
//     return el.length
// }))



//REDUCE
// let arr =[2, 4, 2, 5, 6]

// console.log(arr.filter(el =>{
//     return el>4
// }).reduce((acc, el) =>{
//     return acc + el
// }))

// function myFunc (arr){
//     return arr.filter(el =>{
//         return el>3
//     }).reduce((acc,el) =>{
//         return acc + el
//     })
// }
// console.log(myFunc([2, 4, 2, 5, 6]))

// вам дан массив [2, 4, 2, 5, 6]
// let arr =[2, 4, 2, 5, 6]
// console.log(arr.reduce((acc, el, idx, array) =>{
//     console.log(acc, 'acc')
//     console.log(el, 'el')
//     return acc+el
// }))

// function myFunc(arr){
//     return arr.split(' ').reduce((acc, el) =>{
//         return acc[0]+ '.' + el[0]
//     })
// }
//
// console.log(myFunc('Kanykei Bakytova'))



// function sumEvenNumbers(input) {
//     return input.filter(el =>{
//         return el % 2 === 0
//     }).reduce((acc,el) =>{
//         return acc + el
//     }, 0)
// }
//
// console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9,10]))

// function noSpace(x){
//     return x.split(' ').join('')
//
// }
//
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

// Во всех задачах используйте только методы map, reduce.



// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.

// let arr =[5,15,315,2,13,20,9]
// console.log(arr.reduce((acc,el) => {
//     return acc+el
// }))

// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.

// let arr =[5,12,314,2,13,20,9]
// console.log(arr.filter(el =>{
//     return el%2===0
// }).reduce((acc,el) =>{
//     return acc+el
// }))

// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.

// let arr =[5,15,315,2,13,20,9]
// console.log(arr.filter(el =>{
//     return el>10
// }).reduce((acc,el) =>{
//     return acc+el
// }))

// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.

// let arr =[3,13,54,15,335, 39]
// console.log(arr.filter(el =>{
//     return el>10
// }).reduce((acc,el)=>{
//     return acc-el
// }))

// function myFunc (arr){
//     return arr.filter( el=>{
//         return el>10
//     }).reduce((acc,el)=>{
//         return acc-el
//     })
// }
//
// console.log(myFunc([3,13,54,15,335, 39]))

// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.

// let arr =['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.reduce((acc,el) =>{
//     return acc+el
// }).length)

// function myFn (arr){
//     return arr.reduce((acc,el)=>{
//         return acc+el
//     }).length
// }
//
// console.log(myFn(['Аскар', 'Баяман', 'Калмамат']))

// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.

// let arr =['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.map(el =>{
//     return el.toUpperCase()
// }))

// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.

// let arr =['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.reduce((acc,el)=>{
//     return acc+el
// }).toLowerCase().split('').map((el,idx)=>{
//     if (idx %2 !==0){
//         return el.toUpperCase()
//     } else {
//         return el
//     }
// }).join(''))


// 8. Напишите функцию, которая принимает str, target. И возвращает true или false, если target присутствует в str.
// Использовать .reduce для этого.
//     Пример: isPresent ('abcd', 'b') => true
// isPresent ('efbig', 'a') // => false

// function myFn(str,target){
//     return str.includes(target)
// }
// console.log(myFn('abcd', 'a'))


// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
//     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]

// let arr =['асКар', 'бАяман', 'калМамат']
// console.log(arr.map(el =>{
//     return el[0].toUpperCase() + el.slice(1).toLowerCase()
// }))

// 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.

// let arr =['Баяман', 'Калмамат']
// console.log(arr.reduce((acc,el) =>{
//    return el[0]+acc.slice(1)+' '+acc[0]+el.slice(1)
// }))

// 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет, все ли элементы массива относятся к одному типу данных.

// function myFn(arr){
//     return Array.isArray(arr)
// }
// console.log(myFn([true, '1234', 325]))

// let arr=[true, '1234', 325]
// console.log(typeof arr)
// console.log(Array.isArray(arr))

// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова. Если длина слова
// нечетная, верните средний символ. Если длина слова четная, вернуть 2 средних символа.

// let str =['тестинг']
// console.log(str.map(el=>{
//     if (el.length%2!==0){
//         return el[3]
//     }else {
//         return el
//     }
// }))

// 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.

// let arr =[5, -3, 13, -7, 45]
// console.log(arr.filter(el => {
//     return el > 0
// }).reduce((acc,el) =>{
//     return acc+el
// }))

// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34]. Верните сумму всех отрицательных чисел, которые больше 10.
//
// let arr =[5, -54, 13, -7, 45, -15, -34]
// console.log(arr.filter(el =>{
//     return el < -10
// }).reduce((acc,el) =>{
//     return acc+el
// }))

// function myFn (arr){
//     return arr.filter(el =>{
//         return el< -10
//     }).reduce((acc,el)=>{
//         return acc+el
//     })
// }
//
// console.log(myFn([5, -54, 13, -7, 45, -15, -34]))

// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары. Вам нужно обменять эти
// доллары по курсу сома и вывести все числа в сомах.
//
// let arr =[1, 65, 13 , 30, 100]
// console.log(arr.map(el =>{
//     return el*87
// }))

// 16. Вам дан массив со строками ['Lorem ipsum dor sit omit devour il ela sit'].
// Выведите каждый нечетный индекс в строке в верхнем регистре.

// let arr=['Lorem ipsum dor sit omit devour il ela sit']
// console.log(arr.reduce((acc,el)=>{
//     return acc+el
// }).toLowerCase().split('').map((el,idx)=>{
//      if(idx%2!==0){
//          return el.toUpperCase()
//      }else {
//          return el
//      }
// }).join(''))

// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.

// function myFn([a,b,c]){
//     console.log( '1.' + ' '+ a)
//     console.log('2.'+' ' +b)
//     console.log('3.'+ ' '+ c)
// }
//
// console.log(myFn(['Оскар', 'Баяман', 'Калмамат']))

// 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию , которая вставляет дефис (-) между каждыми
// двумя четными числами. Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.

// function myFn(arr){
//     return arr.map((el,idx,arr)=>{
//         if(idx<arr.length - 1 && el%2 ===0 && arr[idx+1]%2===0){
//           return el+"-"
//         }
//         return el.toString();
//     }).join('');
// }
// console.log(myFn([2,456,6,8]))

// 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее арифметическое чисел в массиве.

// let arr =[5,15,315,2,13,20,9]