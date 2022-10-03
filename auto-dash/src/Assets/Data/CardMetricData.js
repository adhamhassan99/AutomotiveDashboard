import { ReactComponent as EnergyIcon } from "../../Assets/EnergyIcon.svg";
import { ReactComponent as RangeIcon } from "../../Assets/RangeIcon.svg";
import { ReactComponent as BreakIcon } from "../../Assets/BreakIcon.svg";
import { ReactComponent as TireIcon } from "../../Assets/TireIcon.svg";

import { ReactComponent as EnergyChart } from "../../Assets/EnergyChart.svg";
import { ReactComponent as RangeChart } from "../../Assets/RangeChart.svg";
import { ReactComponent as BreakChart } from "../../Assets/BreakChart.svg";
import { ReactComponent as TireChart } from "../../Assets/TireChart.svg";

const CardMetricData = [
  {
    id: 1,
    icon: <EnergyIcon />,
    title: "Energy",
    percentage: "45",
    chart: <EnergyChart />,
  },
  {
    id: 2,
    icon: <RangeIcon />,
    title: "Range",
    percentage: "157k",
    chart: <RangeChart />,
  },
  {
    id: 3,
    icon: <BreakIcon />,
    title: "Break fluid",
    percentage: "9",
    chart: <BreakChart />,
  },
  {
    id: 4,
    icon: <TireIcon />,
    title: "Tire wear",
    percentage: "25",
    chart: <TireChart />,
  },
];

export default CardMetricData;
