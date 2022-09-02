import Head from "next/head";

export const Meta = ({title }) => {
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content="Paydex is a platform to sign up small business merchants where they can create invoice/bill and send payment link to collect money from their customers" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}
