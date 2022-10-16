import { ReactComponent as MetricIcon1 } from "../../Assets/MetricIcon1.svg";
import { ReactComponent as MetricIcon2 } from "../../Assets/MetricIcon2.svg";
import { ReactComponent as MetricIcon3 } from "../../Assets/MetricIcon3.svg";
import { ReactComponent as MetricIcon4 } from "../../Assets/MetricIcon4.svg";
import { purple, red, yellow, green } from "@mui/material/colors";

const comMetricData = [
  {
    id: 1,
    icon: <MetricIcon1 />,
    name: "Oil Level",
    carPart: "Engine",
    state: "Don't Replace",
    percentage: 80,
    color: purple[500],
  },
  {
    id: 2,
    icon: <MetricIcon2 />,
    name: "Brake Pads",
    carPart: "Wheels",
    state: "Still Good",
    percentage: 35,
    color: purple[500],
  },
  {
    id: 3,
    icon: <MetricIcon3 />,
    name: "Steering",
    carPart: "Drivetrain",
    state: "Need Change",
    percentage: 10,
    color: purple[500],
  },
  {
    id: 4,
    icon: <MetricIcon4 />,
    name: "Air Filter",
    carPart: "Engine",
    state: "Needs Change",
    percentage: 95,
    color: purple[500],
  },
];
export default comMetricData;
