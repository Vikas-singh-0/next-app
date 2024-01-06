import User from '@/comps/User';
import React from 'react'

export async function getStaticProps(props) {
  console.log(props);
  const res = await fetch('http://localhost:3000/api/user')
  const data = await res.json();
  console.log("data",data);
  return {
    props: {
      users: JSON.parse(data)
    }
  }
}

export default function users(props) {
  console.log(props.users);
  const users = props.users;
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user)=>{
        return <User key={user.id} user= {user}/>
      })}
    </>
  )
}
