//建立一個存放選取結果的變數
let result = '';

//取得送出按鈕
let myBtn = document.getElementById('btn');
// let myBtn =document.querySelector('#btn');

//監聽按鈕是否左鍵一下 (匿名函式)
myBtn.addEventListener('click', function () {
    //取得下拉式方塊
    let Mycity = document.getElementById('city');
    //使用迴圈，逐一檢查是否被選取  => selecyed
    for (let i = 0; i < Mycity.length; i++) {
        if (Mycity[i].selected) {
            if (Mycity[i].value == "") {
                result = '尚未選取縣市'
            } else {
                result = Mycity[i].value;
            }
            break;
        }
    }
    console.log('選擇的縣市:' + result);

});


// //監聽按鈕是否左鍵一下 (箭頭函式)
// myBtn.addEventListener('click', () => {
//     //取得下拉式方塊
//     let Mycity = document.getElementById('city');
//     //使用迴圈，逐一檢查是否被選取  => selecyed
//     for (let i = 0; i < Mycity.length; i++) {
//         if (Mycity[i].selected) {
//             if (Mycity[i].value == "") {
//                 result = '尚未選取縣市'
//             } else {
//                 result = Mycity[i].value;
//             }
//             break;
//         }
//     }
//     console.log('選擇的縣市:' + result);

// });






