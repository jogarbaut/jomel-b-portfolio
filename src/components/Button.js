import classNames from 'classnames'

const Button = ({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  selected,
  ...rest // take in other props that were passed (i.e. event handlers)
}) => {

  const classes = classNames(rest.className, 'px-3 py-1.5 border flex items-center gap-3 duration-500 rounded', {
    'border-primary-500 bg-primary-500 text-white hover:bg-white hover:text-primary-500': primary,
    'border-secondary-500 bg-secondary-500 hover:bg-white hover:text-secondary-500 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'bg-white hover:bg-gray-200': outline, // later class names overrides earlier (i.e. bg-white will override previous colors)
    'rounded-full': rounded,
    'text-primary-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
    'border-primary-500 bg-primary-500 text-white': selected
  })

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

export default Button