import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Link href="/page1" passHref>
        <Image
          src="/dying-to-meet-you/cover.jpeg" 
          alt="Click to enter"
          width={500} 
          height={500}
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </div>
  );
}