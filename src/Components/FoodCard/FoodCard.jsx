const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-black text-white absolute right-0 mr-6 mt-3 rounded-lg p-3">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="text-2xl">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions flex flex-col items-center">
          <button className="btn text-black hover:text-white bg-slate-300  hover:bg-black border-0 border-b-4 hover:border-b-orange-400 border-b-orange-400">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
