'use client';

import { useState } from 'react';
import { Button } from '@packages/ui/button';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-5 gap-4">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button variant="secondary" onClick={() => setCount(count + 1)}>
        Button {count}
      </Button>
    </div>
  );
}
