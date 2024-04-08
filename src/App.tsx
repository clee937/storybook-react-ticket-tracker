import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import SearchBar from "./components/SearchBar/SearchBar";
import { FormEvent, useState } from "react";
import team from "./data/team";
import Employee from "./types/employee";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const handleSelect = (event: FormEvent<HTMLSelectElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSelectValue(input);
  };

  const filteredEmployees: Employee[] = team.filter((employee) => {
    if (searchTerm && selectValue) {
      return (
        employee.name.toLowerCase().includes(searchTerm) &&
        employee.role.toLowerCase() === selectValue
      );
    } else if (searchTerm) {
      return employee.name.toLowerCase().includes(searchTerm);
    } else if (selectValue) {
      return employee.role.toLowerCase() === selectValue;
    }
    return true;
  });

  return (
    <div className="app">
      <h1 className="app__title">Ticket Tracker</h1>
      <div className="app__filters">
        <SearchBar
          label="Employee"
          searchTerm={searchTerm}
          placeHolderText="Search by name..."
          handleInput={handleInput}
        />

        <Dropdown label="Role" handleSelect={handleSelect} />
      </div>

      <div className="app__container">
        {filteredEmployees &&
          filteredEmployees.map((employee: Employee) => (
            <EmployeeCard
              key={employee.id}
              name={employee.name}
              role={employee.role}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
