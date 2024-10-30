//1
document.getElementById('table_title').style.color = 'red';

//2
document.getElementById('table_title').innerHTML = '<h2>従業員一覧</h2>';

//3
// 新しい<tr>要素の生成
// let tr_1 = document.createElement('tr');
//<td>要素を追加
let td_1 = '<td>1</td><td>山田太郎</td><td>yamada@exercise.co.jp</td><td>開発</td>';
let t_body = document.getElementById('table_body');
t_body.insertAdjacentHTML('afterbegin',td_1);

//4


