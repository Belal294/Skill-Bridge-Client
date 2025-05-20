import React from 'react';

const NotesSection = () => {
    return (
        <div>
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">
                    <FileTextIcon />
                  </span>
                  <h3 className="text-lg font-medium">Notes</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-gray-800">
                      Meeting with candidate at 3pm who applied for Bilingual Event Support Specialist
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center rounded-md bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                      High Priority
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-md hover:bg-gray-200">
                        <span className="text-gray-500">
                          <EditIcon />
                        </span>
                      </button>
                      <button className="p-1 rounded-md hover:bg-gray-200">
                        <span className="text-gray-500">
                          <TrashIcon />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                  Add Note
                </button>
              </div>
            </div>
          </div>
    );
};

export default NotesSection;