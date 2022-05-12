// layouts/Page.jsx

import Sidebar from '../components/Sidebar'
import StickyTop from '../components/StickyTop'

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <StickyTop />
        <div className="px-6 pt-6 2xl:container">{children}</div>
      </div>
    </>
  )
}
