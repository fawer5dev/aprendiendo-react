import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

// Array of user objects
const users = [
  {
    userName: 'fawer5',
    name: 'Fawer Vargas',
    isFollowing: true
  },
  {
    userName: 'MillosFCoficial',
    name: 'Millonarios',
    isFollowing: false
  },
  {
    userName: 'twitter',
    name: 'Twitter',
    isFollowing: true
  },  
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}