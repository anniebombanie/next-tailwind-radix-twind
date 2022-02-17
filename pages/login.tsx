import React, { Component } from 'react'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import Alert from '../components/Alert'
import Button from '../components/Button'
import { tw } from 'twind'
import { prefix } from '../prefix.js'

const loginLinks = {
  forgotPassword: {
    href: '/forgot-password',
    text: 'Forgot your password?',
  },
  signUp: {
    href: '/signup',
    text: "Don't have an account?",
  },
  sso: {
    href: '/sso',
    text: 'Log in with SSO',
  },
}

class LoginPage extends Component {
  state = {
    loggedIn: false,
  }

  onSubmit = () => {
    const { loggedIn } = this.state

    this.setState({
      loggedIn: loggedIn ? false : true,
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
                src={`${prefix}/icon.svg`}
                alt="Pastel"
                translate="no"
              />
              <h2 className="text(center 3xl gray-900) mt-6 font-bold">
                Log in to Pastel
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <a href="#" className="text-link font-medium text-blue-500">
                  start your 14-day free trial
                </a>
              </p>
            </div>

            <div className={tw`sm:(mx-auto max-w-md) mt-8 w-full`}>
              <div className="bg-white py-10 px-6 sm:rounded-lg sm:px-10">
                {loggedIn && (
                  <Alert variant="success">Successfully logged in!</Alert>
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
                    <Button onClick={this.onSubmit} type="submit">
                      Log in
                    </Button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  {Object.values(loginLinks).map((link) => (
                    <Link href={link.href}>
                      <a href="#" className="text-link mt-3 block text-sm">
                        {link.text}
                      </a>
                    </Link>
                  ))}
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
