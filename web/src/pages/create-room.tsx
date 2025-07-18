import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

type GetRoomsApiResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');
      const result: GetRoomsApiResponse = await response.json();

      return result;
    },
  });

  return (
    <div>
      <h1>Create Room</h1>
      {isLoading && <p>Carregando...</p>}
      {data && (
        <ul className="space-y-1">
          {data.map((room) => (
            <li key={room.id}>
              <Link to={`/rooms/${room.id}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
