import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Friend } from './Friend'

export function FriendsList(props) {
    const [friends, setFriends] = useState()

  useEffect(() => {
    localStorage.getItem('token') &&
    axiosWithAuth().get('/api/friends')
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  console.log(friends)
    return(
        <div>
           {friends ? friends.map((item, index) => {
               return <Friend item={item} key={index} />

           }):
            <h3>Loading Friends...</h3>
           }
        </div>
    )
} 