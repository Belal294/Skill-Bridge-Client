import React from 'react';

const OrderItem = () => {
  return (
                  <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">
                      <FileTextIcon />
                    </span>
                    <h3 className="text-lg font-medium">Orders</h3>
                  </div>
                </div>
                <div className="divide-y">
                  {/* Order Item 1 */}
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Professional Plan</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                        Unpaid
                      </span>
                      <span>Order: #326</span>
                      <span>|</span>
                      <span>Date: 12/08/2019</span>
                    </div>
                  </div>

                  {/* Order Item 2 */}
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Professional Plan</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Paid
                      </span>
                      <span>Order: #264</span>
                      <span>|</span>
                      <span>Date: 10/07/2019</span>
                    </div>
                  </div>

                  {/* Order Item 3 */}
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Professional Plan</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Paid
                      </span>
                      <span>Order: #211</span>
                      <span>|</span>
                      <span>Date: 12/06/2019</span>
                    </div>
                  </div>

                  {/* Order Item 4 */}
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Professional Plan</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Paid
                      </span>
                      <span>Order: #179</span>
                      <span>|</span>
                      <span>Date: 06/05/2019</span>
                    </div>
                  </div>
                </div>
              </div>
  );
};

export default OrderItem;