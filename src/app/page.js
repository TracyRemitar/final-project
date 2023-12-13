<<<<<<< HEAD
import ViewPage from '../../frontend/pages'
import AddDataPage from '../../frontend/pages/add'
import Link from 'next/link'
import UpdateDataPage from '../../frontend/pages/update/[id]'
import DeleteDataPage from '../../frontend/pages/delete'
=======
// Home.js
import React from 'react';
import ViewPage from '../../frontend/pages';
import AddDataPage from '../../frontend/pages/add';
import UpdateDataPage from '../../frontend/pages/update/[id]';
import DeleteDataPage from '../../frontend/pages/delete';
>>>>>>> 07e3bcd715e995b725c9e1e8a091064f11ee921f

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<<<<<<< HEAD
      <div>
        <ViewPage></ViewPage>
        <AddDataPage></AddDataPage>
        <UpdateDataPage></UpdateDataPage>
=======
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ViewPage />
        <AddDataPage />
      </div>
      <div>
        <UpdateDataPage />
        <DeleteDataPage item={{ name: 'Example', quantity: 10 }} />
>>>>>>> 07e3bcd715e995b725c9e1e8a091064f11ee921f
      </div>
    </main>
  );
}
