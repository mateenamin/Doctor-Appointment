import {
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  RotateCw,
  TrendingUp,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardPage = () => {
  const isLoading = false;
  const error = null;

  const totalDocs = 0;
  const completedCount = 5;
  const processingCount = 6;
  const failedCount = 8;
  // Prepare data for charts
  const statusData = [
    { name: 'Mon', pending: 0, completed: 0, rejected: 0 },
    { name: 'Tues',pending: 0, completed: 2, rejected: 0 },
    { name: 'Wed', pending: 1, completed: 3, rejected: 1 },
    { name: 'Thu', pending: 0, completed: 4, rejected: 3 },
    { name: 'Fri', pending: 0, completed: 5, rejected: 2 },
    { name: 'Sat', pending: 2, completed: 1, rejected: 0 },
    { name: 'Sun', pending: 0, completed: 3, rejected: 1 },
    
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-indigo-200 rounded-full"></div>
            <div className="w-20 h-20 border-4 border-[#16A0E6] rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
          </div>
          <p className="content text-gray-600 mt-6 font-medium">
            Loading your documents...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="content text-gray-600 mb-6">
            We couldn't load your documents. Please try again.
          </p>
          <button

            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            <RotateCw className="w-5 h-5" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
        {/* Header Section */}
        <div className="mb-6 w-full flex flex-col items-start justify-center gap-2">
          <p className="text-sky-600 font-bold">Here's your latest platform overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-all hover:scale-105 transform">
            <div className="flex items-center justify-between  mb-3">
              <div
                className="p-2.5 rounded-lg shadow-md bg-linear-to-br from-blue-500 to-blue-600"

              >
                <FileText className="w-5 h-5 text-white" />
              </div>

            </div>
            <p className="text-xs text-gray-600 mb-1 font-medium">
              Total Documents
            </p>
            <p className="text-2xl font-bold text-gray-900">{totalDocs}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-green-100 hover:shadow-lg transition-all hover:scale-105 transform">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 bg-linear-to-br from-green-500 to-green-600 rounded-lg shadow-md">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>

            </div>
            <p className="text-xs text-gray-600 mb-1 font-medium">Completed</p>
            <p className="text-2xl font-bold text-gray-900">{completedCount}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-yellow-100 hover:shadow-lg transition-all hover:scale-105 transform">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 bg-linear-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-md">
                <Clock className="w-5 h-5 text-white" />
              </div>

            </div>
            <p className="text-xs text-gray-600 mb-1 font-medium">Processing</p>
            <p className="text-2xl font-bold text-gray-900">
              {processingCount}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-red-100 hover:shadow-lg transition-all hover:scale-105 transform">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 bg-linear-to-br from-red-500 to-red-600 rounded-lg shadow-md">
                <XCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-1 font-medium">Failed</p>
            <p className="text-2xl font-bold text-gray-900">{failedCount}</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
  <div className="flex items-center gap-2 mb-4">
    <div className="p-2 bg-gray-100 rounded-lg border border-green-200">
      <TrendingUp className="w-5 h-5 text-green-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">
      Status Trend Over Time
    </h3>
  </div>
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={statusData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
      <XAxis 
        dataKey="name" 
        stroke="#6b7280"
        style={{ fontSize: '12px' }}
      />
      <YAxis 
        stroke="#6b7280"
        style={{ fontSize: '12px' }}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '8px 12px'
        }}
      />
      <Legend 
        verticalAlign="top" 
        height={36}
        wrapperStyle={{ paddingBottom: '10px' }}
      />
      <Line type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={2} />
<Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} />
<Line type="monotone" dataKey="rejected" stroke="#ef4444" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
</div>


      </div>
    </div>
  );
};

export default DashboardPage;