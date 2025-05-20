export default function NotificationItem({ icon: Icon, user, action, job }) {
  return (
    <div className="flex items-start p-4 gap-3">
      <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full text-gray-500">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-sm">
        <p>
          <span className="font-medium">{user}</span>
          <span className="text-gray-600"> {action} </span>
          <a href="#" className="text-blue-600 hover:underline">
            {job}
          </a>
        </p>
      </div>
    </div>
  );
}
