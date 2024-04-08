import "./Dropdown.scss";
import team from "../../data/team";
import Employee from "../../types/employee";
import { FormEventHandler } from "react";

type DropdownProps = {
  label: string;
  handleSelect: FormEventHandler<HTMLSelectElement>;
};

const Dropdown = ({ label, handleSelect }: DropdownProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);
  const uniqueRoles = team.filter((employee, index) => {
    return (
      team.findIndex((element) => element.role === employee.role) === index
    );
  });

  return (
    <div className="dropdown">
      <label htmlFor={label} className="dropdown__label">
        {capitalizedLabel}
      </label>
      <select
        id={label}
        name={label}
        className="dropdown__select"
        onChange={handleSelect}
      >
        <option value="">All…</option>
        {uniqueRoles &&
          uniqueRoles.map((employee: Employee) => (
            <option key={employee.id} value={employee.role}>
              {employee.role}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
