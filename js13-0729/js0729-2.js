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
});