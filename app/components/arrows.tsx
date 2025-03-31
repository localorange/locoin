import Link from 'next/link';

type NavigationProps = {
  leftUrl: string;
  rightUrl: string;
};

export default function NavigationArrows({ leftUrl, rightUrl }: NavigationProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {leftUrl && (
        <Link href={leftUrl} passHref>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-110">
          &lt;
          </div>
        </Link>
      )}
      {rightUrl && (
        <Link href={rightUrl} passHref>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-110">
          &gt;
          </div>
        </Link>
      )}
    </div>
  );
}
