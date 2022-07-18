import DefaultPageContainer from "../../commom/DefaultPageContainer";
import EmployeesTable from './EmployeesTable';

function Employees() {
  return <DefaultPageContainer label="Employees">
    <EmployeesTable />
  </DefaultPageContainer>;
}

export default Employees;
