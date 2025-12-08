import Link from 'next/link';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <Link href="#home" className="flex items-center gap-2">
      <Code2 className="h-8 w-8 text-blue-500" />
      <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Leoarf
      </span>
    </Link>
  );
}
