import React from 'react';
import ViewPage from '../../frontend/pages';
import AddDataPage from '../../frontend/pages/add';
import UpdateDataPage from '../../frontend/pages/update/[id]';
import DeleteDataPage from '../../frontend/pages/delete';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ViewPage />
        <AddDataPage />
        <UpdateDataPage />
        <DeleteDataPage item={{ name: 'Example', quantity: 10 }} />
      </div>
      <div>

      </div>
    </main>
  );
}
