import React from "react"
import { Link } from "react-router-dom"

const Button = ({ href, path, content, wrapperClasses, type, onClick }) => {
  const buttonClasses =
    "py-4 px-10 w-full md:w-52 " +
    `text-lg text-black tracking-3xl text-center ` +
    `rounded-md ` +
    "transition-all duration-300 ease-in-out " +
    "md:self-end " +
    wrapperClasses

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    )
  } else if (path) {
    return (
      <Link to={path} className={buttonClasses}>
        {content}
      </Link>
    )
  } else {
    return (
      <button type={type} className={buttonClasses} onClick={onClick}>
        {content}
      </button>
    )
  }
}

Button.defaultProps = {
  light: true,
  href: null,
  path: null,
  wrapperClasses: "",
  type: "",
  onClick: () => {},
}

export default Button
