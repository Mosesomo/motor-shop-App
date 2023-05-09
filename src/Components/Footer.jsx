import { AiFillYoutube, AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="bg-slate-500 lg:h-[200px] h-[400px] mt-4 lg:flex justify-between items-center p-8">
      <ul className="mb-6">
        <li>Careers</li>
        <li>Returns & Refund</li>
        <li>FLash sales</li>
        <li>Privacy Notice</li> 
      </ul>
      <ul className="mb-6">
        <li>Help center</li>
        <li>Return & Refund</li>
        <li>FLash sales</li>
        <li>Privacy Notice</li>
      </ul>
      <ul>

        {/*social links*/}
        <li className="font-bold">Follow us on</li>
        <div className="flex items-center">
          <AiOutlineInstagram className="text-red-600 hover:bg-white cursor-pointer text-xl"/><li>Instagram</li>
        </div>
        <div className="flex items-center">
          <AiFillFacebook className="text-blue-900 text-xl"/><li>Facebook</li>
        </div>
        <div className="flex items-center">
          <AiOutlineTwitter className="text-blue-900 text-xl"/><li>Twitter</li>
        </div>
        <div className="flex items-center">
          <AiFillYoutube className="text-red-600"/><li>Youtube</li>
        </div>
      </ul>
    </div>
  )
}

export default Footer
