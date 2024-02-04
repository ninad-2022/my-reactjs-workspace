import { useQuery } from "react-query";
import { fetchSingleProducts } from "../../api/products";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", productId],
    queryFn: () => fetchSingleProducts(productId),
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>{(error as Error).message}</h1>;
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{`${data?.data.brand} ${data?.data.category}`}</h2>
          <p className="mt-4 text-gray-500">{data?.data.description}</p>
          <p className="mt-4 text-gray-500">{data?.data.price} Rs</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {data?.data.images.map((image: string, i:number) => (
            <img
              key={i}
              src={image}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
