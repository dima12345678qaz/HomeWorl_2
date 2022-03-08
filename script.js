// task2
// let num=prompt('введіть число','');
// if (num%2===0 && num>0) {
//     console.log('Число парне')
// } else if (num%7===0) {
//     console.log('Кратним 7 ')
// }
    



// task3
// const arr=[];
// let usersymbol=prompt('введіть значеняя','')
// arr[0]=10
// arr[1]=''
// arr[2]=true
// arr[3]=null
// arr[4]=usersymbol
// console.log(arr.length)
// alert(arr[4])
// arr.shift()
// console.log(arr)



// task4
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// console.log(cities.join("*"))


// task5
// let isAdult=prompt('Вам виповнилось 18 років ?','');
// if (isAdult>18) {
//     alert('Ви досягли повнолітнього віку')
// } else if (isAdult<18) {
//     alert('Ви ще надто молоді')
// }


//task7
// let time2=new Date();
// let now = time2.getHours();
// switch (now) {
//     case 23:
//     case 24:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('Доброї ночі');
//         break;
//     case 5:
//     case 6:  
//     case 7:
//     case 8:
//     case 9:  
//     case 10:
//     case 11:
//         console.log('Доброго ранку');
//         break;
//     case 11:
//     case 12:
//     case 13:  
//     case 14:
//     case 15:
//     case 16:  
//     case 17:
//         console.log('Доброго дня');
//         break;
//     case 17:
//     case 18:
//     case 19:  
//     case 20:
//     case 21:
//     case 22:  
//     case 23:
//         console.log('Доброго вечора');
//         break;
// }

// let time =new Date();
// let hours=time.getHours();
// if (hours>=23&&hours<=5) {
//     console.log('Доброї ночі')
// } else if (hours>=5&&hours<=11) {
//     console.log('Доброго ранку')
// } else if (hours>=11&&hours<=17) {
//     console.log('Доброго дня')
// } else if (hours>=17&&hours<=23) {
//     console.log('Доброго вечора')
// }



//task7

let a=+prompt('Введіть сторону а');
let b=+prompt('Введіть сторону b');
let c=+prompt('Введіть сторону c')

if (isNaN(a)|| isNaN(b) ||isNaN(c)) {
    alert('Incorrect data')
} else {
    let p = (a + b + c) / 2;
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(S.toFixed(3))
    let sorted=[a,b,c].sort() 
    if (Math.pow(sorted[0],2)+Math.pow(sorted[1],2)==Math.pow(sorted[2],2)) {
        alert('Прямокутний трикутник')
    }
}








