import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Pastel: TailwindCSS, TailwindUI, Radix, </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-5xl font-bold">
        	Testing Tailwind
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="./login"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Login Pages &rarr;</h3>
            <p className="mt-4 text-xl">
              Includes Login, SSO, Forget Password, Create new account
            </p>
          </a>
		  </div>
      </main>
    </div>
  )
}
