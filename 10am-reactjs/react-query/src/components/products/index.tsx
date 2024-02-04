import { useQuery } from "react-query";
import { fetchProducts } from "../../api/products";
import { Link } from "react-router-dom";

type ProductType = {
  id: number;
  thumbnail: string;
  imageAlt: string;
  title: string;
  price: number;
};

const Products = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchProducts,
  });
  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>{(error as Error).message}</h1>;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.data?.products.map((prod: ProductType) => (
            <Link to={`/products/${prod.id}`} key={prod.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={prod.thumbnail}
                  alt={prod.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{prod.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {prod.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
