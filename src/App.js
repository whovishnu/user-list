import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        setUserList(res)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="App">
      {
        loading ? "loading.." :
          userList.map((user) => {
            return (
              <div className='user-card'>
                <div>
                  <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} width={200} />
                </div>
                <div>
                  <div className='name'>{user.name}</div>
                  <div className='details'><b>Email:</b> {user.email}</div>
                  <div className='details'><b>Phone:</b> {user.phone}</div>
                  <div className='details'><b>Company:</b> {user.company.name}</div>
                  <div className='details'><b>Website:</b> {user.website}</div>
                  <div className='details'><b>Address:</b> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</div>
                </div>
              </div>
            )

          })
      }
    </div>
  );
}

export default App;
