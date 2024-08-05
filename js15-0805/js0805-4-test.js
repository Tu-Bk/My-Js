//使用Name屬性，取得元素內容
// let myDrinks = document.getElementsByName('drinks');
// console.log(myDrinks);

// for (let i = 0; i < myDrinks.length; i++) {
//     console.log(myDrinks.item(i).value);
//     console.log(myDrinks[i].value);
// }


//取得勾選的項目內容
//第一步 => 先找到按鈕
let myBtn = document.getElementById('btn');

//第二步 => 監聽按鈕是否被按了(click => 左鍵一下的事件)
myBtn.addEventListener('click', function () {
    let arrResult = [];
    let arrResultNot = [];
    let myDrinks = document.getElementsByName('drinks');
    //逐一檢查是否被勾選 =>checked
    for (let i = 0; i < myDrinks.length; i++) {
        //有被勾選的項目
        if (myDrinks[i].checked) { //checked => 在html的checkbox已有內部屬性
            arrResult.push(myDrinks[i].value);
        }

        //沒有被勾選的項目 => 使用Not反向!做顯示
        if (!myDrinks[i].checked) { //checked => 在html的checkbox已有內部屬性
            arrResultNot.push(myDrinks[i].value);
        }
    }
    console.log('有被勾選的項目:' + arrResult);
    console.log('沒有被勾選的項目:' + arrResultNot);




    //被勾選
    let str1 = '';
    if (arrResult.length > 0) {
        str1 = '<div><ul id="sel">被勾選項目';

        //放被選取的li

        for (let i = 0; i < arrResult.length; i++) {
            str1 = str1 + `<li>${arrResult[i]}</li>`;
        }

        str1 = str1 + '</ul></div>';
    }
    //取得顯示資料的位置


    //沒有被勾選的
    let str2 = '';
    if (arrResultNot.length > 0) {

        str2 = '<div><ul id="notsel">沒被勾選項目';
        //放被選取的li


        for (let i = 0; i < arrResultNot.length; i++) {
            str2 = str2 + `<li>${arrResultNot[i]}</li>`;
        }

        str2 = str2 + '</ul></div>';
    }

    let getDiv = document.getElementById('showData');
    getDiv.innerHTML = str1 + str2;
    // getDiv.innerHTML = str2;
    // //含有Html標籤，要使用innerHTML
    // getDiv.innerHTML = '<h1>test1</h1>';
    // getDiv.innerHTML = getDiv.innerHTML + 'test';
});


/* ↓↓單一任務可以使用即時處理 ↓↓*/
/* ↓↓超過單一任務，盡可能不要使用即使處理，很消耗資源跟難處理 ↓↓*/

/* 
let use1 = document.getElementById('drinks');
use.addEventListener('click', function () {
    let arrResult = [];
    let arrResultNot = [];
    let myDrinks = document.getElementsByName('drinks');
    //逐一檢查是否被勾選 =>checked
    for (let i = 0; i < myDrinks.length; i++) {
        //有被勾選的項目
        if (myDrinks[i].checked) { //checked => 在html的checkbox已有內部屬性
            arrResult.push(myDrinks[i].value);
        }

        //沒有被勾選的項目 => 使用Not反向!做顯示
        if (!myDrinks[i].checked) { //checked => 在html的checkbox已有內部屬性
            arrResultNot.push(myDrinks[i].value);
        }
    }

    let str1 = '';
    // if (arrResult.length > 0) {
    str1 = '<div><ul id="sel">被勾選項目';

    //放被選取的li

    // for (let i = 0; i < arrResult.length; i++) {
    str1 = str1 + `<li>${use[i]}</li>`;
    // }

    str1 = str1 + '</ul></div>';

    //取得顯示資料的位置


    //沒有被勾選的
    let str2 = '';
    // if (arrResultNot.length > 0) {

    str2 = '<div><ul id="notsel">沒被勾選項目';
    //放被選取的li


    //for (let i = 0; i < arrResultNot.length; i++) {
    str2 = str2 + `<li>${use[i]}</li>`;
    //}

    str2 = str2 + '</ul></div>';



    let getDiv = document.getElementById('showData');
getDiv.innerHTML = str1 + str2;

});
 */