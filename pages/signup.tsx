import React, { Component } from 'react'
import { Label } from '@radix-ui/react-label'
import { Checkbox, CheckboxIndicator } from '@radix-ui/react-checkbox'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { prefix } from '../prefix.js'

class SignUp extends Component {
  render() {
    return (
      <html className="min-h-screen bg-white">
        <div className="flex min-h-screen">
          <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-28 xl:px-60">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <img
                className="mx-auto h-14 w-auto"
                src={`${prefix}/icon.svg`}
                alt="Pastel"
                translate="no"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Happy Monday!
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                We’re excited to show you how Pastel can help you get feedback
                and approvals on your creative work effortlessly!
              </p>

              <div className="mt-8">
                <div className="mt-6">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <Label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full name
                      </Label>
                      <div className="mt-1">
                        <input
                          id="name"
                          name="name"
                          type="name"
                          autoComplete="name"
                          required
                          className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-3 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
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
                    <div className="relative flex items-center">
                      <div className="flex h-5 items-center">
                        <input
                          id="privacy-terms-of-service"
                          aria-describedby="comments-description"
                          name="privacy-terms-of-service"
                          type="checkbox"
                          className="text-indigo-600 h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
                        />
                        <Checkbox
                          defaultChecked
                          id="privacy-terms-of-service"
                          className="h-4 w-4 justify-center rounded border border-gray-300 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <CheckboxIndicator>
                            <FontAwesomeIcon
                              icon={'check'}
                              style={{ fontSize: 10 }}
                            />
                          </CheckboxIndicator>
                        </Checkbox>
                      </div>
                      <div className="ml-3 text-xs text-gray-500">
                        <Label
                          htmlFor="privacy-terms-of-service"
                          className="sr-only"
                        >
                          Privacy and Terms of Service
                        </Label>
                        <p id="privacy-terms-of-service">
                          I agree to the{' '}
                          <Link href="https://usepastel.com/privacy">
                            <a className="underline">privacy policy</a>
                          </Link>{' '}
                          and{' '}
                          <Link href="https://usepastel.com/terms">
                            <a className="underline">terms of service</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="align-center flex w-36 w-auto justify-center rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                  <div className="mt-6 text-center">
                    <Link href="/login">
                      <a href="#" className="text-link mt-3 block text-sm">
                        Already have an account?
                      </a>
                    </Link>
                    <Link href="/sso">
                      <a href="#" className="text-link mt-3 block text-sm">
                        Sign up with SSO
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block hidden w-0 flex-1 bg-gradient-to-b from-blue-50 to-indigo-200 lg:block">
            <div className="l:px-28 flex min-h-screen items-center py-12 px-20 lg:px-24 xl:px-32 2xl:px-44">
              <div>
                <FontAwesomeIcon
                  icon={'star'}
                  style={{ fontSize: 30, color: '#FBBF24', marginRight: 5 }}
                />
                <FontAwesomeIcon
                  icon={'star'}
                  style={{ fontSize: 30, color: '#FBBF24', marginRight: 5 }}
                />
                <FontAwesomeIcon
                  icon={'star'}
                  style={{ fontSize: 30, color: '#FBBF24', marginRight: 5 }}
                />
                <FontAwesomeIcon
                  icon={'star'}
                  style={{ fontSize: 30, color: '#FBBF24', marginRight: 5 }}
                />
                <FontAwesomeIcon
                  icon={'star'}
                  style={{ fontSize: 30, color: '#FBBF24' }}
                />
                <blockquote className="mt-4 text-gray-900">
                  <p className="text-xl font-bold">
                    The missing link between client and builder!!
                  </p>
                  <p className="text-sm">
                    Impeccable experience. Super smooth and couldn't be simpler
                    to integrate into your project feedback workflow. Trello
                    export was the cherry on top. Throw out your old revision
                    processes. This delivers feedback better than any other
                    service.
                  </p>
                  <footer className="mt-6">
                    <p className="flex flex-col text-sm font-medium">
                      <span>Rhett Butler</span>
                      <span className="text-gray-700">
                        Client Service Analyst
                      </span>
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </html>
    )
  }
}

export default SignUp
