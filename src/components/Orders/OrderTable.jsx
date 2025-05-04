import OrderItems from "./OrderItems";

const OrderTable = ({ items }) => {
  return (
    <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md mb-6">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="px-4 py-3 text-left">Product</th>
            <th className="px-4 py-3 text-right">Name</th>
            <th className="px-4 py-3 text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <OrderItems key={item.id} item={item} />
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-4 py-3 text-center text-red-500">
                No items found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
