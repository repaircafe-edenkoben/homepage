import Layout from '@theme/Layout'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode | ReactNode[]
  title: string
  description: string
}

export default function LayoutWrapper ({
  children,
  title,
  description
}: Props) {
  return (
    <Layout title={title} description={description}>
        {children}
    </Layout>
  )
}
