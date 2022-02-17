import { FC, ReactNode } from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  variant: 'success' | 'info' | 'warning' | 'error'
  children: ReactNode
}

const Alert: FC<IProps> = ({ variant, children }) => {
  const styles = {
    container: cx('flex', 'mb-6', 'rounded', 'p-3', {
      'bg-emerald-50': variant === 'success',
      'bg-amber-100': variant === 'warning',
      'bg-rose-50': variant === 'error',
      'bg-blue-50': variant === 'info',
    }),
    text: cx('text-xs', {
      'text-emerald-600': variant === 'success',
      'text-amber-400': variant === 'warning',
      'text-amber-600': variant === 'error',
      'text-blue-600': variant === 'info',
    }),
  }

  return (
    <div className={styles.container}>
      {variant === 'success' && (
        <FontAwesomeIcon
          icon={'circle-check'}
          style={{
            fontSize: 15,
            marginRight: 5,
            color: '#059669',
          }}
        />
      )}
      {variant === 'info' && (
        <FontAwesomeIcon
          icon={'circle-info'}
          style={{
            fontSize: 15,
            marginRight: 5,
            color: '#2953e2',
          }}
        />
      )}
      {variant === 'warning' && (
        <FontAwesomeIcon
          icon={'circle-exclamation'}
          style={{
            fontSize: 15,
            marginRight: 5,
            color: '#FBBF24',
          }}
        />
      )}
      {variant === 'error' && (
        <FontAwesomeIcon
          icon={'circle-xmark'}
          style={{
            fontSize: 15,
            marginRight: 5,
            color: '#E11D48',
          }}
        />
      )}
      <p className={styles.text}>{children}</p>
    </div>
  )
}

export default Alert
