"use strict";

// カウントを保持する変数
let count = 0;

// 最大カウント数を定義
const MAX_COUNT = 999;


// プラスボタンが押された場合
function plus() {
    // カウントが最大カウント数より小さい場合
    if (count < MAX_COUNT) {
        // カウントをプラス1する
        count = count + 1;
        // カウントを表示する
        document.getElementById("count").innerText = count;
    }
}


// マイナスボタンが押された場合
function minus() {
    // カウントが0より大きい場合
    if (count > 0) {
        // カウントをマイナス1する
        count = count - 1;
    } else {
        // カウントを0にする
        count = 0;
    }
    // カウントを表示する
    document.getElementById("count").innerText = count;
}


// リセットボタンが押された場合
function reset() {
    // 確認ダイアログを表示する
    let reset = confirm("リセットしてよろしいですか？");
    // ダイアログでOKが押された場合
    if (reset === true) {
        // カウントを0にする
        count = 0;
        // カウントを表示する
        document.getElementById("count").innerText = count;
    }
}