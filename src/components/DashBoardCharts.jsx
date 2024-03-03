import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
ChartJS.register(ArcElement, Tooltip, Legend);

const DashBoardCharts = ({ users, profiles }) => {
  const { t } = useTranslation();
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
      tooltip: {
        titleFont: {
          family: "'Poppins', 'sans-serif'",
        },
        bodyFont: {
          family: "'Poppins', 'sans-serif'",
        },
      },
    },
  };

  const data = {
    labels: [
      t("DashBoardTitle.Total Users"),
      t("DashBoardTitle.Total Profiles"),
    ],
    datasets: [
      {
        label: "Application Record",
        data: [users, profiles],
        backgroundColor: ["#E2E8F0", "#4F46E5"],
        borderColor: ["#E2E8F0", "#4F46E5"],
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <div className="my-6 w-full p-4 container h-[50vh] md:h-[80vh] card-shadow-custom rounded-lg dark:shadow-2xl dark:text-white">
        <Doughnut options={options} data={data} />
      </div>
    </>
  );
};

export default DashBoardCharts;
