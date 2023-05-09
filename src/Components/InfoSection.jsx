
const InfoSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div>
        <img className="h-[260px] ml-6 hover:scale-105 duration-[1s] cursor-pointer" src="https://images.pexels.com/photos/529782/pexels-photo-529782.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
      <div>
      <h2 className="text-yellow-100 font-semibold mb-3 text-xl lg:mr-6 ml-4">Our Equippments</h2>
      <div className="text-white lg:mr-7 ml-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quos.</p> 
        <p>Aut pariatur eum perferendis quam facilis quis voluptate suscipit deserunt ex iste praesentium,</p> 
          <p>modi eligendi recusandae sequi nostrum voluptatem ab!</p>
      </div>
      </div>
    </div>
  )
}

export default InfoSection
