import React, { Component } from 'react'
import { Label } from '@radix-ui/react-label'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.mustBeLoggedOut = true
  }

  handleSubmit = ({ email, password }) => {
    console.log({ email, password })
  }

  render() {
    return (
      <html class="min-h-screen bg-gray-100">
        <div className="login-form">
          <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-14 w-auto"
                src="icon.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
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

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-10 px-6 sm:rounded-lg sm:px-10">
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
                        required
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
                        required
                        className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-3 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="align-center flex w-36 justify-center rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Log in
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="block text-sm font-medium text-blue-500 hover:text-blue-600"
                    >
                      Forgot your password?
                    </a>

                    <a
                      href="#"
                      className="mt-3 block text-sm font-medium text-blue-500 hover:text-blue-600"
                    >
                      Don't have an account?
                    </a>

                    <a
                      href="#"
                      className="mt-3 block text-sm font-medium text-blue-500 hover:text-blue-600"
                    >
                      Log in with SSO
                    </a>
                  </div>
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
