//1
document.getElementById('table_title').style.color = 'red';

//2
document.getElementById('table_title').innerHTML = '<h2>従業員一覧</h2>';

//3
// 新しい<tr>要素の生成
// let tr_1 = document.createElement('tr');
//<td>要素を追加
// let td_1 = '<td>1</td><td>山田太郎</td><td>yamada@exercise.co.jp</td><td>開発</td>';
let t_body = document.getElementById('table_body');
// t_body.insertAdjacentHTML('afterbegin',td_1);

//5

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
                <td>${userInfo.id}
                <td>${userInfo.user_name}</td>
                <td>${userInfo.mail_address}</td>
                <td>${userInfo.dept_name}</td>
                <button type="button" class="btn btn-success mt-4 m-1" onclick= "edit_data(this)" >編集</button>
                <button type="button" class="btn btn-danger mt-4 m-1"  >削除</button></td>
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



// 6 一日かかった

const form = document.getElementById('add_btn');
    form.addEventListener('click', submitFormData);

    function submitFormData(e) {
        e.preventDefault();

      // 送信データをオブジェクトとして作成
    const data = {
        user_name : document.querySelector('input[name="user_name"]').value,
        mail_address: document.querySelector('input[name="mail_address"]').value,
        dept_name: document.querySelector('select[name="dept_name"]').value,
    };
    if (document.getElementById('user_name').value == "" || 
    document.getElementById('mail_address').value == "" || 
    document.getElementById('dept_name').value == "" ){
        alert('入力値が不正です');
    }else{
        fetch('http://localhost:3001/employee', {
        method: "POST",
        body: JSON.stringify(data), // JSON文字列化して送信
        headers: {
          "Content-Type": "application/json", // JSON形式でデータを送信することをサーバーに伝える
          Accept: "application/json", // レスポンスをJSONで受け取る
        },
    })
        .then((response) => console.log(response))
        .catch((error) => console.log(error)); 
    }
}
// axios.post('http://localhost:3001/employee', { key: 'value' })
// .then(response => {
//     console.log('レスポンスデータ:', response.data);
// })
// .catch(error => {
//     console.error('エラーが発生しました:', error);
// });

// const btn = document.getElementById('add_btn');

// const fd = new FormData();

// btn.addEventListener('click', function(){
//     const user_name= document.register_form.user_name.value;
//     console.log(user_name)
//     alert(document.register_form.user_name.value);
//     document.register_form.submit();
//     // fd.append('user_name','value');    

//     fetch('http://localhost:3001/employee', {
//         method: 'POST',
//         body: user_name,
//     })
//     .then(response => response.json())
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});
// })


    

// function submitFormData(e) {
//     e.preventDefault();

// const form = document.getElementById('add_btn');
// form.addEventListener("click", submitFormData);

  // 送信データをFormData形式で作成
// const formData = new FormData();
// formData.append("user_name", document.register_form.user_name.value);
// formData.append("mail_address", document.register_form.mail_address.value);
// formData.append("dept_name", document.register_form.dept_name.value);
// console.log(document.register_form.user_name.value)
// // console.log(formData)
//   // Fetch APIを使ってエンドポイントにPOSTリクエストを送信
// fetch('http://localhost:3001/employee', {
//     method: "POST",
//     body: formData,
//     headers: {
//       // Acceptヘッダーでapplication/jsonを指定してレスポンスをJSONデータとして受け取る     Accept: "application/json",
//     Accept: "application/json",
//     },
// })
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// }




// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     const user_name= document.querySelector('input[name=user_name]');

//     fd.append('name', user_name.value);

//     fetch('http://localhost:3001/employee', {
//         method: 'POST',
//         body: fd
//     })
//     .then(response => response.json())
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

// })

//7　編集

function edit_data(e) {
    // console.log(e);
    var idx=$(e).closest('tr').prop('rowIndex');
    console.log(idx);
};

// $("button").click(function(e) {
//     var s = $(e.currentTarget).parent().prev().text();
//     alert(s);
// });

// $(function(){
//     $('button').on('click',function(){
//     var idx=$(this).closest('tr').prop('rowIndex');
//     console.log(idx);
//     });
// });

