function SingleBook({ book }) {
  const { name, author, price, image_url } = book || {};
  return (
    <div className="flex flex-col gap-y-2">
      <img className="w-[200px] h-[250px] " src="./images.png" alt={name} />
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs">{name}</span>
          <span>{price.toFixed(2)}</span>
        </div>
        <div>{author}</div>
      </div>
    </div>
  );
}

export default SingleBook;
