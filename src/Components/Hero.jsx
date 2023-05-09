
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center mt-10 mb-10">
      <div>
      <h2 className="text-yellow-100 text-xl font-semibold mb-3 ml-7">Get The Best Bikes</h2>
      <div className="text-white mb-8 ml-6">
      <p>The future is here. The new generation</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> <p>Architecto, officia magnam eveniet, hic sapiente aliquam, commodi totam eum similique fugit veniam.</p> 
      <p>Natus eligendi minima atque impedit voluptate repellendus voluptates harum?</p>
      </div>
      </div>
      <div className="">
        <img className="cursor-pointer hover:scale-105 duration-[1s]" src="https://images.pexels.com/photos/165938/pexels-photo-165938.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
    </div>
  )
}

export default Hero
