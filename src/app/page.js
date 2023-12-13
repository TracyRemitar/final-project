import ViewPage from '../../frontend/pages'
import AddDataPage from '../../frontend/pages/add'
import Link from 'next/link'
import UpdateDataPage from '../../frontend/pages/update/[id]'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <ViewPage></ViewPage>
      <AddDataPage></AddDataPage>
      </div>
      <div><UpdateDataPage></UpdateDataPage></div>
    </main>
  )
}
