// //取得元素節點
// //根據ID屬性來抓取
// let myhtml = document.getElementById('html');
// console.log(typeof myhtml);  /* typeof => 類型 */
// console.log(myhtml.textContent);
// //根據querySelector
// console.log(document.querySelector('#html').textContent);

// console.log(' ');
// console.log('------------------');
// console.log(' ');

// //根據'HTML標籤'
// let myli = document.getElementsByTagName('li');
// console.log(myli);
// //↓↓ 取出CSS內容 ↓↓
// console.log(myli.item(1).textContent); /* item => 物件 */
// console.log(myli[1].textContent);


// console.log(' ');
// console.log('------------------');
// console.log(' ');



// //↓↓ 顯示所有li ↓↓  (篩選功能也會使用到這個方法)
// for (let i = 0; i < myli.length; i++) {
//     console.log(myli.item(i).textContent);
//     console.log(myli[i].textContent);
// }

// console.log(' ');
// console.log('------------------');
// console.log(' ');


// // textContent =>文字內容
// console.log('querySelector');
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('h1').textContent);
// console.log('getElementsByTagName');
// console.log(document.getElementsByTagName('h1'));
// console.log('作法一:' + document.getElementsByTagName('h1')[0].textContent);
// console.log('作法二:' + document.getElementsByTagName('h1').item(0).textContent);


// //使用類別名稱
// let mySubject = document.getElementsByClassName('subject');
// console.log(mySubject);
// for(let i=0 ;i<mySubject.length;i++){
//     console.log(mySubject.item(i).textContent);
//     console.log(mySubject[i].textContent);
// }

// //顯示指定的內容(必須有ID名稱) =>Css
// console.log(mySubject['css'].textContent);


//取得 id#p1 的內容
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector("#p1").textContent);


//取得li的子元素中有段落的p
let myP = document.querySelectorAll('li>p');
console.log(myP);
console.log(myP[0].textContent);



//取得li的子元素中的div下的第一個段落
let myDivP = document.querySelectorAll('li>div>p');
console.log(myDivP[0].textContent);

console.log(' ');

console.log('for迴圈拉出p裡面的資料');
for(let i=0;i<myDivP.length;i++){
    console.log(myDivP[i].textContent);
};


