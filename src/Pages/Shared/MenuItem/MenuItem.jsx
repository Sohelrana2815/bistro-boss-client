import "./menu.css";
const MenuItem = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="flex space-x-6">
      <img className="md:w-[120px] w-20 menuImg" src={image} alt="" />
      <div>
        <h2 className="text-3xl font-bold">{name}-------------</h2>
        <p className="text-lg">{recipe}</p>
      </div>
      <p className="text-yellow-600 text-2xl"> {price}$</p>
    </div>
  );
};

export default MenuItem;
