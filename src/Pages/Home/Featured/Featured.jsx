import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item mt-20 pt-10 bg-fixed">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-16 px-28">
        <div>
          <img src={featured} className="rounded-md " alt="" />
        </div>
        <div className="space-y-4 md:ml-20">
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            voluptates similique ipsum sunt eveniet modi sapiente laboriosam
            aperiam! Ratione eaque accusantium voluptas necessitatibus ex libero
            deserunt facilis? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sed incidunt cum minima inventore nulla recusandae, impedit
            doloremque suscipit odit beatae et, quod magnam, totam explicabo
            earum cumque. Cum, quibusdam aliquam.
          </p>
          <button className="btn btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
