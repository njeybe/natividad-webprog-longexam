import Button from "./Button";

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-zinc-200 bg-zinc-100 p-4">
      <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 font-text">
        {product.category} {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-zinc-900 font-head">
        {product.title}
      </h3>
      <p className="mt-2 text-base font-bold text-zinc-900 font-text">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-600 font-text">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4 font-text">
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;
