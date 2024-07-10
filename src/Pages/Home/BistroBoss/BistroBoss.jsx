import bistroImg from "../../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  return (
    <div className="relative ">
      <div>
        <img src={bistroImg} alt="" />
      </div>
      <div className="absolute left-64 top-24">
        <div className=" lg:w-[1000px] lg:h-[320px] bg-white text-center flex items-center justify-center flex-col px-20 py-10 ">
          <h3 className="text-5xl text-black">Bistro Boss</h3>
          <p className="py-6 text-xl text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
