import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DashBoardCharts = ({ users, blogs }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            family: "'Poppins', 'sans-serif'",
            weight: "bold",
          },
        },
      },
    },
  };

  const data = {
    labels: ["Total Users", "Total Profiles"],
    datasets: [
      {
        label: "Application Record",
        data: [users, blogs],
        backgroundColor: ["#E2E8F0", "#4F46E5"],
        borderColor: ["#E2E8F0", "#4F46E5"],
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <div className="my-6 w-full p-4 container h-[50vh] md:h-[80vh] card-shadow-custom rounded-lg">
        <Doughnut options={options} data={data} />
      </div>
    </>
  );
};

export default DashBoardCharts;
