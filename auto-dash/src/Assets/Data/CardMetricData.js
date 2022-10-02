import { ReactComponent as EnergyIcon } from "../../Assets/EnergyIcon.svg";
import { ReactComponent as RangeIcon } from "../../Assets/RangeIcon.svg";
import { ReactComponent as BreakIcon } from "../../Assets/BreakIcon.svg";
import { ReactComponent as TireIcon } from "../../Assets/TireIcon.svg";

const CardMetricData = [
  {
    id: 1,
    icon: <EnergyIcon />,
    title: "Energy",
    percentage: "45",
  },
  {
    id: 2,
    icon: <RangeIcon />,
    title: "Range",
    percentage: "157k",
  },
  {
    id: 3,
    icon: <BreakIcon />,
    title: "Break fluid",
    percentage: "9",
  },
  {
    id: 4,
    icon: <TireIcon />,
    title: "Tire wear",
    percentage: "25",
  },
];

export default CardMetricData;
