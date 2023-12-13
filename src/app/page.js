import React from 'react';
import ViewPage from '../../frontend/pages';
import AddDataPage from '../../frontend/pages/add';
import UpdateDataPage from '../../frontend/pages/update/[id]';
import DeleteDataPage from '../../frontend/pages/delete';
import Inventory from '../../frontend/pages/Inventory';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Inventory></Inventory>
      </div>
    </main>
  );
}
