import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  CustomersTableType,
  Product,
} from '@/app/lib/definitions';

export default async function CustomersTable({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Products
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="w-full grid grid-cols-2 gap-3 p-5">
                {products?.map((product) => (
                  <div
                    key={product.id}
                    className="mb-2 w-full space-y-3 rounded-md bg-white p-4 inset-2 shadow-lg shadow-black"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{product.title}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{product.price}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{product.category.name}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center items-center">
                      {product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={product.title}
                          className='w-52 h-52 object-cover rounded-md'
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
