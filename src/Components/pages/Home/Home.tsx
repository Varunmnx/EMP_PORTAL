import {EmployeeCard} from "../../Cards";
import { FlexBox } from "../../Flexbox/FlexBox";

const employees = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
  { name: "Bob Johnson", age: 35 },
];

const Home = () => {
  return (
    <FlexBox container style={{gap:"10px"}}  padding={"10px 20px"}> 
        {/* <div className="employee-card">
          <h2>Employee Name</h2>
          <p>ID: EMP001</p>
          <p>Task: Task Description</p>
          <p>Time Taken: 2 hours</p>
        </div> */}

        {
          employees.map((employee,idx) => (
             <EmployeeCard key={idx}  name={employee.name} age={employee.age}/>
          ))
        } 
    </FlexBox>
  );
};

export default Home;
