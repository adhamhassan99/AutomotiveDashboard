import { ReactComponent as ChatIcon } from "../../Assets/ChatIcon.svg";
import { ReactComponent as WarningIcon } from "../../Assets/WarningIcon.svg";
import { ReactComponent as MaintIcon } from "../../Assets/MaintIcon.svg";

export const notesData = [
  {
    icon: <ChatIcon />,
    title: "Monday, 6th April 2020",
    subtitle: "Book for General Service",
    completed: true,
    date: "14:07 - 21/11/2022",
  },
  {
    icon: <WarningIcon />,
    title: "Thursday, 24th October 2021",
    subtitle: "Vehicle LV 001 has been marked for recall.",
    completed: false,
    date: "14:07 - 21/11/2022",
  },
  {
    icon: <MaintIcon />,
    title: "Monday, 13th August 2018",
    subtitle: "Maintenance Completed, Collect",
    completed: false,
    date: "14:07 - 21/11/2022",
  },
];
