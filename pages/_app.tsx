import '../styles/globals.css'
import LayoutApp from 'components/Layout/LayoutApp'
import LayoutPublic from 'components/Layout/LayoutPublic'
import LayoutTenant from 'components/Layout/LayoutTenant'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter()
  const { pathname } = router
  let Layout = LayoutPublic

  if (pathname.indexOf('/app') === 0) {
    Layout = LayoutApp
  } else if (pathname.indexOf('/[slug]') === 0) {
    Layout = LayoutTenant
  }

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
