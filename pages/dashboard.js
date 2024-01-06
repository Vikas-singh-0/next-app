import React, { useEffect, useState } from 'react'

export default function dashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetcher () {
      const res = await fetch('http://localhost:3000/api/dashboard')
      const data = await res.json();
      console.log(data);
      setDashboardData(data)
      setLoading(false)
    }
    fetcher()
  }, [])
  if(loading) return (<p>...loading</p>)
  return (
    
    <div>
      {loading && (<h2>Paua</h2>)}
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>
  )
}
