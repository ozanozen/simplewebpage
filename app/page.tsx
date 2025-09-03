import { GetServerSideProps } from 'next';
import { IncomingHttpHeaders } from 'http';

interface PageProps {
  ip: string;
  userAgent: string;
}

export default function Page({ ip, userAgent }: PageProps) {
  return (
    <div>
      <h1>Client Information</h1>
      <p>IP Address: {ip}</p>
      <p>User-Agent: {userAgent}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ req }) => {
  const headers: IncomingHttpHeaders = req.headers;
  const ip = headers['x-forwarded-for'] as string || req.socket.remoteAddress || 'Unknown';
  const userAgent = headers['user-agent'] || 'Unknown';

  return {
    props: {
      ip,
      userAgent,
    },
  };
};
