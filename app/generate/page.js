import { Suspense } from 'react';
import Generate from '@/components/Generate';

export default function GeneratePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Generate />
    </Suspense>
  );
}