import NotificationItem from "./NotificationItem";
import { UserIcon, BriefcaseIcon, MessageCircleIcon } from "./Icons";

const notifications = [
  {
    icon: UserIcon,
    user: "Michael Shannah",
    action: "applied for a job",
    job: "Full Stack Software Engineer",
  },
  {
    icon: BriefcaseIcon,
    user: "Samantha Lee",
    action: "was hired for",
    job: "UX Designer",
  },
  {
    icon: MessageCircleIcon,
    user: "John Carter",
    action: "sent you a message about",
    job: "Mobile App Project",
  },
];

export default function NotificationsPanel() {
  return (
    <div className="bg-white rounded-2xl shadow">
      <div className="p-4 border-b text-sm font-medium text-gray-700">
        Recent Notifications
      </div>
      <div>
        {notifications.map((n, index) => (
          <NotificationItem key={index} {...n} />
        ))}
      </div>
    </div>
  );
}
