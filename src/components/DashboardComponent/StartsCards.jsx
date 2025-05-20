import { GavelIcon, BriefcaseIcon, DollarSignIcon } from "./Icons";

const stats = [
  {
    icon: GavelIcon,
    label: "Active Bids",
    value: 12,
    color: "text-emerald-500",
  },
  {
    icon: BriefcaseIcon,
    label: "Jobs Applied",
    value: 34,
    color: "text-blue-500",
  },
  {
    icon: DollarSignIcon,
    label: "Earnings",
    value: "$5,200",
    color: "text-yellow-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <div
          key={label}
          className="p-4 bg-white rounded-2xl shadow flex items-center gap-4"
        >
          <span className={`bg-gray-100 p-2 rounded-full ${color}`}>
            <Icon className="w-5 h-5" />
          </span>
          <div>
            <div className="text-gray-600 text-sm font-medium">{label}</div>
            <div className="text-lg font-semibold text-gray-900">{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
