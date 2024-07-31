/* 取得送出按鈕 */
/* 作法一 */
let Mybtn1 = document.getElementById('btn1');
let Mybtn2 = document.getElementById('btn2');

/* 作法二 */
// let Mybtn1 = document.querySelector('#btn1');
// let Mybtn2 = document.querySelector('#btn2');

//監聽按鈕是否被左鍵一下(匿名函式)
Mybtn1.addEventListener('click', function () {
    let result1 = '';
    //取得選修科目
    let subjects = document.getElementsByName('subject');
    //使用迴圈逐一檢查是否被選取 => checked
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {  //checked => 按下 的意思
            //取得選項鈕的值
            result1 = subjects[i].value;  //value => 值 的意思
            //因為是單選，所以找到後就會結束迴圈
        }
    }
    console.log('請選擇科目一:' + result1);
});




//監聽按鈕是否被左鍵一下(箭頭函式)
Mybtn2.addEventListener('click', () => {
    let result2 = '';
    //取得選修科目
    let design = document.getElementsByName('design');
    for (let i = 0; i < design.length; i++) {
        if (design[i].checked) {   //checked => 按下 的意思
            //取得選項鈕的值
            result2 = design[i].value; //value => 值 的意思
            //因為是單選，所以找到後就會結束迴圈
        }
    }
    console.log('請選擇科目二:' + result2);

});