import React from 'react';

const Notifications = () => {
    return (
                      <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">
                      <BellIcon />
                    </span>
                    <h3 className="text-lg font-medium">Notifications</h3>
                  </div>
                  <button className="p-1 rounded-md hover:bg-gray-100">
                    <span className="text-gray-500">
                      <EditIcon />
                    </span>
                  </button>
                </div>
                <div className="divide-y">
                  {/* Notification Item 1 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <UserIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="font-medium">Michael Shannah</span>{" "}
                        <span className="text-gray-600">applied for a job</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Full Stack Software Engineer
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Notification Item 2 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <GavelIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="font-medium">Gilber Allanis</span>{" "}
                        <span className="text-gray-600">placed a bid on your</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          iOS App Development
                        </a>{" "}
                        <span className="text-gray-600">project</span>
                      </p>
                    </div>
                  </div>

                  {/* Notification Item 3 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <ClockIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="text-gray-600">Your job listing</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Full Stack Software Engineer
                        </a>{" "}
                        <span className="text-gray-600">is expiring</span>
                      </p>
                    </div>
                  </div>

                  {/* Notification Item 4 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <UserIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="font-medium">Sindy Forrest</span>{" "}
                        <span className="text-gray-600">applied for a job</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Full Stack Software Engineer
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Notification Item 5 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <ImageIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="font-medium">David Peterson</span>{" "}
                        <span className="text-gray-600">left you a</span>{" "}
                        <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                          5.0
                        </span>{" "}
                        <span className="text-gray-600">rating after finishing</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Logo Design
                        </a>{" "}
                        <span className="text-gray-600">task</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

    );
};

export default Notifications;