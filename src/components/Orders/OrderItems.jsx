const OrderItems = ({ item }) => {
    console.log("items:", item);
  
    // Check if item has a title and price
    if (!item.title || !item.price || !item.images || item.images.length === 0) {
      return (
        <tr className="border-b hover:bg-gray-50">
          <td colSpan="3" className="px-4 py-3 text-center text-red-500">
            Product details are missing
          </td>
        </tr>
      );
    }
  
    // Convert price to number
    const price = parseFloat(item.price);
  
    return (
      <tr className="border-b hover:bg-gray-50">
        <td className="px-4 py-3">
          {/* Image of the product */}
          <img
            src={item.images[0].image}
            alt={item.title}
            className="w-16 h-16 object-cover rounded-md"
          />
        </td>
        <td className="px-4 py-3 font-medium">{item.title}</td>
        <td className="px-4 py-3 text-right">${price.toFixed(2)}</td>
      </tr>
    );
  };
  
  export default OrderItems;
  