//1
document.getElementById('table_title').style.color = 'red';
//2
document.getElementById('table_title').innerHTML = '<h2>従業員一覧</h2>';
//3
//<tr>要素の生成
let tr_1 = document.createElement('tr');
let td_1 = tr_1.setAttribute('td','td_1',);
let t_body = document.getElementById('table_body');
t_body.insertAdjacentHTML('afterend','1','山田');
let td_2  = document.createElement('td');
td_2.setAttribute('td','名前',);
tr_1.insertAdjacentHTML('afterend','山田太郎');

// let tr_2 = document.createElement('tr');
// tr_2.setAttribute('td','名前');
// t_body.insertAdjacentHTML('afterend','山田太郎');


