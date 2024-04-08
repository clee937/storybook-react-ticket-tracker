import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

type EmployeeCardProps = {
  name: string;
  role: string;
};

const EmployeeCard = ({ name, role }: EmployeeCardProps) => {
  return (
    <div className="employee-card">
      <div className="employee-card__details-container">
        <p className="employee-card__details employee-card__details--name">
          {name}
        </p>
        <p className="employee-card__details employee-card__details--role">
          {role}
        </p>
      </div>
      <Counter />
    </div>
  );
};

export default EmployeeCard;
