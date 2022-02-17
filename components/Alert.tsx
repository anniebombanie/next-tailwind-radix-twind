import { FC, ReactNode } from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  success?: boolean
  info?: boolean
  warning?: boolean
  error?: boolean
  children: ReactNode
}

const Alert: FC<IProps> = ({ success, info, warning, error, children }) => {
  return (
    <div
      className={cx(
        'flex',
        'mb-6',
        'rounded',
        'p-3',
        { 'bg-emerald-50': success },
        { 'bg-amber-100': warning },
        { 'bg-rose-50': error },
        { 'bg-blue-50': info }
      )}
    >
      {success && (
        <FontAwesomeIcon
          icon={'circle-check'}
          style={{
            fontSize: 15,
            marginRight: 5,
            color: '#059669',
          }}
        />
      )}
	  {info && (
        <FontAwesomeIcon
          icon={'circle-info'}
          style={{
            fontSize: 15,
            marginRight: 5,
            color: '#2953e2',
          }}
        />
      )}
	  {warning && (
        <FontAwesomeIcon
          icon={'circle-exclamation'}
          style={{
            fontSize: 15,
            marginRight: 5,
            color: '#FBBF24',
          }}
        />
      )}
	  {error && (
        <FontAwesomeIcon
          icon={'circle-xmark'}
          style={{
            fontSize: 15,
            marginRight: 5,
            color: '#E11D48',
          }}
        />
      )}
      <p
        className={cx(
          'text-xs',
          { 'text-emerald-600': success },
          { 'text-amber-400': warning },
          { 'text-amber-600': error },
          { 'text-blue-600': info }
        )}
      >
        {children}
      </p>
    </div>
  )
}

export default Alert
