import { headers } from 'next/headers';

export default function Page() {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') ?? 'Unknown';
  const userAgent = headersList.get('user-agent') ?? 'Unknown';

  return (
    <div>
      <h1>Client Information</h1>
      <p>IP Address: {ip}</p>
      <p>User-Agent: {userAgent}</p>
    </div>
  );
}
