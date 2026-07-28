import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  return (
    <div className="mx-auto max-w-[1340px] px-6 py-20">
      <h1 className="text-4xl font-bold">
        Products
      </h1>

      <p className="mt-4 text-lg">
        Category: <span className="font-semibold">{category}</span>
      </p>
    </div>
  );
};

export default Products;