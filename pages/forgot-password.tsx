import React, { Component } from 'react'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import { prefix } from '../prefix.js'

class ForgotPassword extends Component {
  render() {
    return (
      <html className="min-h-screen bg-gray-100">
        <div className="login-form">
          <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-14 w-auto"
                src={`${prefix}/icon.svg`}
                alt="Pastel"
                translate="no"
              />
              <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                Forgot your password?
              </h2>
              <p className="mx-auto mt-4 w-96 text-center text-sm text-gray-600">
                We’ll get this fixed in no time. Enter the email address you
                used to sign up for Pastel, and we’ll send you a link to reset
                your password.
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
                      Enter your email address
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
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="align-center flex w-auto justify-center rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Send Password Reset Email
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <Link href="/signup">
                    <a className="text-link mt-3 block text-sm">
                      Don't have an account?
                    </a>
                  </Link>
                  <Link href="/login">
                    <a href="#" className="text-link mt-3 block text-sm">
                      Log in with email
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

export default ForgotPassword
