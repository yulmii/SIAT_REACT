import { useState } from 'react';
import './App.css';
import Header from './Header';


function Content({items, action,deleteFn}) {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  return (
  <>
    ID : <input type="text" id="userId" value={userId} onChange={e=>setUserId(e.currentTarget.value)} placeholder="id 입력"/><br/>
    Name : <input type="text" id="userName" value={userName} onChange={e=>setUserName(e.currentTarget.value)} placeholder="name 입력"/><br/>
    <input type="button" id="sendBtn" value="저장" onClick={(event) => {
      event.preventDefault();
      action(userId, userName);
    }}/><br/>
    <ul>
      {items.map( (item, i) => {
        //console.log(item);
        return <li key={item.no}>{item.no} - {item.id} - {item.name} || <button onClick={()=>{deleteFn(item.no)}}>삭제</button></li>
      
      })}
    </ul>
  </>
  )
}

function App2() {
  const menuItems = ['홈','프로필','갤러리','쇼핑몰']
  const[no, setNo]  = useState(5);
  const [saramList, setSaramList] = useState([
    {no:1, id:'HONG', name:'홍길동'},//이거 하나하나가 컴포넌트라고 생각해서 리엑트는 등록된 컴포넌트가 아니다라고 생각해서 오류남 {item}
    {no:2, id:'KIM', name:'김길동'},
    {no:3, id:'LEE', name:'이길동'},
    {no:4, id:'PARK', name:'박길동'},
  ]);
  function saramListAction(userId, userName) {
    //alert(userName +',' + userId    );
    setSaramList(list =>[...list,{no:no, id:userId, name:userName}])
    setNo(no+1);
  }

  return (
    <>
      <Header items={menuItems} name="홍길자" title="홍길자의 여행정보 사이트"></Header>
      <Content items={saramList} action={saramListAction} 
      deleteFn= {function(no){
        let Arr = [];
  saramList.forEach(function(item){
    if (item.no!=no){
    Arr.push(item);
    }
    })
    setSaramList(Arr);

      }} />
    </>
  );
}

export default App2;