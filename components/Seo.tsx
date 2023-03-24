import { Content } from 'next/font/google'
import Head from 'next/head'

interface Props {
  title: string
  description?: string
}

export default function Seo({ title, description }: Props) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name='description' content={description} />}
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
