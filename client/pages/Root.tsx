import { Navigate } from 'react-router-dom'
import { getLocalStorageItem, setLocalStorageItem } from '../localStorage'

// Simple room names for easier sharing
const simpleRoomNames = [
  'canvas', 'whiteboard', 'drawing', 'sketch', 'board', 'art', 'design', 'notes',
  'planning', 'brainstorm', 'ideas', 'workspace', 'session', 'meeting', 'collab'
]

const myLocalRoomId = getLocalStorageItem('my-local-room-id') ?? 
  simpleRoomNames[Math.floor(Math.random() * simpleRoomNames.length)] + '-' + Math.floor(Math.random() * 1000)
setLocalStorageItem('my-local-room-id', myLocalRoomId)

export function Root() {
	return <Navigate to={`/${myLocalRoomId}`} />
}
