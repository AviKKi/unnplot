import copy from "copy-to-clipboard"
import { AiOutlineCopy } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const UrlDisplay = ({ url }) => {
  const notify = () => toast("Url is copied")
  const copyHandler = () => {
    notify()
    copy(url)
  }

  return (
    <>
      <p className="text-gray-600 mt-3">
        Use this url to embed a plot in your notion docs <br />
      </p>
      <span
        onClick={copyHandler}
        className="cursor-pointer bg-blue-100 p-2 rounded my-2"
      >
        {url}
        <br />
        <span className="mt-2 text-sm text-gray-600 flex items-center">
          <AiOutlineCopy className="mr-2 mt-0" /> Click to Copy
        </span>
      </span>
      <ToastContainer />
    </>
  )
}

export default UrlDisplay
