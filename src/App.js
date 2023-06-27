import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import logo from "./images/logo.svg";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thur", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };
  return (
    <>
      <div className="max-w-xl mx-auto p-5 flex flex-col justify-center h-screen">
        <article className="soft-red p-8 rounded-3xl flex items-center justify-between">
          <h2 className=" font-bold text-white">
            <span className=" block text-base font-normal">My Balance</span>{" "}
            $921.48
          </h2>
          <img src={logo} alt="" />
        </article>
        <article className="bg-white p-8 mt-8 rounded-2xl">
          <article className="pb-4">
            <h1 className="font-bold text-2xl md:text-3xl mb-4">
              Spending - Last 7 days
            </h1>
            <Bar data={state} />
          </article>

          <article className="border-t border-slate-200 mt-6 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="flex flex-col text-gray-500 text-sm">
                Total this month
                <span className="font-bold text-3xl text-black"> $478.33</span>
              </h2>
              <h2 className="flex flex-col font-bold text-xl">
                +2.4%
                <span className="text-gray-500 text-sm font-normal">
                  From last month
                </span>
              </h2>
            </div>
          </article>
        </article>
      </div>
    </>
  );
}

export default App;
