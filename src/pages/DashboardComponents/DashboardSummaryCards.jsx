import { GavelIcon, BriefcaseIcon, StarIcon } from "./Icons" 

const DashboardSummaryCards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 mb-1">Task Bids Won</p>
            <h3 className="text-3xl font-bold">{data ? data.task_bids_won ?? 0 : "Loading..."}</h3>
          </div>
          <div className="p-3 rounded-md bg-emerald-50">
            <span className="text-emerald-500">
              <GavelIcon />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 mb-1">Jobs Applied</p>
            <h3 className="text-3xl font-bold">{data ? data.jobs_applied ?? 0 : "Loading..."}</h3>
          </div>
          <div className="p-3 rounded-md bg-pink-50">
            <span className="text-pink-500">
              <BriefcaseIcon />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 mb-1">Reviews</p>
            <h3 className="text-3xl font-bold">{data ? data.reviews ?? 0 : "Loading..."}</h3>
          </div>
          <div className="p-3 rounded-md bg-amber-50">
            <span className="text-amber-500">
              <StarIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSummaryCards
