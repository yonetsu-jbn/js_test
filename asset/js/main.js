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
// t_body.insertAdjacentHTML('afterbegin',td_1);

//5
// console.log('APIリクエストを送信します');

// fetch('http://localhost:3001/employee', { method: 'GET'})
//     .then(response => response.json())
//     .then(data =>{
//         console.log('データを取得しました', data);
//     })
//     .catch(error => {
//         console.error('エラーが発生しました', error);
//     });

//     console.log('他の処理を実行します')



    async function getUserData() {
        try{
            const response = await fetch('http://localhost:3001/employee');
            console.log(response)
            const data= await response.json();
            console.log(data)
            const t_body = document.getElementById('table_body');

            for (const userInfo of data) {
                const userItem = document.createElement('tr');
                userItem.innerHTML = `
                    <td>${userInfo.id}</td>
                    <td>${userInfo.user_name}</td>
                    <td>${userInfo.mail_address}</td>
                    <td>${userInfo.dept_name}</td>
                `;
                // t_body.insertAdjacentHTML('afterbegin', userItem);
                t_body.appendChild(userItem);

            }
            }catch(error){
                console.error('Error fetching data:', error);
                t_body.insertAdjacentHTML('afterbegin', `<p>データが取得できませんでした。</p>`);
            }
        }

        getUserData();

// 5

// axios.post('http://localhost:3001/employee', { key: 'value' })
// .then(response => {
//     console.log('レスポンスデータ:', response.data);
// })
// .catch(error => {
//     console.error('エラーが発生しました:', error);
// });

document.getElementById('user_name').addEventListener('click', function(){

});
let user_name = document.getElementById('user_name').value;
console.log()
let mail_address = document.getElementById('mail_address');
let dept_name = document.getElementById('dept_name');
console.log(user_name);
