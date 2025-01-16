import CountCharts from "@/app/components/Charts/CountCharts";
import UserCard from "@/app/components/UserCard/UserCard";
import BarCharts from "@/app/components/Charts/BarCharts";
import FinanceCharts from "@/app/components/Charts/FinanceCharts";

const AdminPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* User cards */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="doctor" countItem="78"/>
                    <UserCard type="nurse" countItem="120"/>
                    <UserCard type="staff" countItem="88"/>
                    <UserCard type="patient" countItem="1,280"/>
                </div>

                {/* Middle Charts */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* Patient Age - Count Chart */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountCharts />
                    </div>

                    {/* Patient Admitted - Bar Chart */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <BarCharts />
                    </div>
                </div>

                {/* Bottom Chart */}
                <div className="w-full h-full">
                    <div className="w-full h-[450px]">
                        <FinanceCharts />
                    </div>
                </div>

            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/3">
                <span className="text-black">RIGHT</span>
            </div>
        </div>
    );
}

export default AdminPage;