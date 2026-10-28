import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const pathname = asPath.split(/[?#]/)[0].replace(/\/$/, '') || '/'
  const isActive = pathname === props.href || pathname === props.as ||
    (props.href !== '/' && pathname.startsWith(`${props.href}/`))

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    isActive
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props} aria-current={isActive ? 'page' : undefined}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink
