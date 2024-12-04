//NOMBRE: MENESES JANCKO SOCIMO CRISTIAN 

import CustomersTable from '@/app/ui/customers/table';

export default async function CustomersPage() {
  const products = await fetch('https://api.escuelajs.co/api/v1/products')
    .then((res) => {
      if (!res.ok) throw new Error('No se pudo obtener los productos');
      return res.json();
    });

  return <CustomersTable products={products} />;
}
