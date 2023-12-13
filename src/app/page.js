import ViewPage from '../../frontend/pages'
import AddDataPage from '../../frontend/pages/add'
import Link from 'next/link'
import UpdateDataPage from '../../frontend/pages/update/[id]'
import DeleteDataPage from '../../frontend/pages/delete'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ViewPage></ViewPage>
        <AddDataPage></AddDataPage>
        <UpdateDataPage></UpdateDataPage>
      </div>
    </main>
  )
}
