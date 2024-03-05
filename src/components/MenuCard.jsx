

const MenuCard = ({ id, image, title, description, price }) => (
  <div key={id} className="flex-shrink-0 max-w-sm max-sm:w-[300px] bg-white border my-7 border-gray-200 rounded-lg shadow
  overflow-hidden transition-transform duration-300 transform hover:scale-105 font-quicksand">
    <div>
      <img className="rounded-t-lg object-cover h-60 w-full transition-transform duration-300 transform hover:scale-90" src={image} alt={title} />
    </div>
    <div className="p-3 text-dark-slate-gray">
      <div className="">
          <h5 className="mb-2 text-3xl font-bold tracking-tight">{title}</h5>
      </div>
      <p className="mb-3 text-md font-normal">{description}</p>
      <p className=" font-extrabold">$ {price}</p>
    </div>
  </div>
);

export default MenuCard;

