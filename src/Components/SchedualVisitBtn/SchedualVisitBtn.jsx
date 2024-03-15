import'./SchedualVisitBtn.css';
import { FaCalendar } from "react-icons/fa6";
const SchedualVisitBtn = () => {
  return (
    <div className="schedual-visit">
      <button>
        <FaCalendar />
      </button>
      <div className="text-schedular">
        <p>Schedualr Visit</p>
      </div>
    </div>
  );
};

export default SchedualVisitBtn;
