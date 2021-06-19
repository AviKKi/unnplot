const Button = (props) => {
  return (
    <button
      {...props}
      className="bg-primary text-white text-lg w-full rounded py-2 px-7 font-medium hover:bg-primary-dark"
    >
      {props.children}
    </button>
  )
}

export default Button
