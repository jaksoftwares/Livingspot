"use client";

const DashboardOverview = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Vacant Houses</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">New Messages</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Tenant Inquiries</h2>
          <p className="text-3xl font-bold">8</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
