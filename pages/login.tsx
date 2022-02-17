import React, { Component } from 'react'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import Alert from '../components/Alert';
import { tw } from 'twind'

class LoginPage extends Component {
  state = {
    loggedIn: false,
  }

  onSubmit = () => {
	  const { loggedIn} = this.state;

	  this.setState({
		  loggedIn: loggedIn ? false : true
	  })
  }


  render() {
    const { loggedIn } = this.state

    return (
      <html className="min-h-screen bg-gray-100">
        <div className="login-form">
          <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-14 w-auto"
                src="icon.svg"
                alt="Pastel"
                translate="no"
              />
              <h2 className="mt-6 text(center 3xl gray-900) font-bold">
                Log in to Pastel
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <a
                  href="#"
                  className="font-medium text-blue-500 hover:text-blue-600"
                >
                  start your 14-day free trial
                </a>
              </p>
            </div>

            <div className={tw`mt-8 sm:(mx-auto w-full max-w-md)`}>
              <div className="bg-white py-10 px-6 sm:rounded-lg sm:px-10">
                {loggedIn && (
					<Alert success>Successfully logged in!</Alert>
                )}

                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </Label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        // required
                        className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-3 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </Label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        // required
                        className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-3 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
					onClick={this.onSubmit}
                      type="submit"
                      className="align-center flex w-36 w-auto justify-center rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Log in
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <Link href="/forgot-password">
                    <a href="#" className="text-link block text-sm">
                      Forgot your password?
                    </a>
                  </Link>

                  <Link href="/signup">
                    <a className="text-link mt-3 block text-sm">
                      Don't have an account?
                    </a>
                  </Link>
                  <Link href="/sso">
                    <a href="#" className="text-link mt-3 block text-sm">
                      Log in with SSO
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </html>
    )
  }
}

export default LoginPage
