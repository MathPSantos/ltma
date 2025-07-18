import { Navigate, useParams } from 'react-router-dom';

export function Room() {
  const params = useParams<{ roomId: string }>();

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }

  return <div>Room Details: {params.roomId}</div>;
}
