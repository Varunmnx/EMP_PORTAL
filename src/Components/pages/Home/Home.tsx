import { FlexBox } from "../../Flexbox/FlexBox";

const Home = () => {
  return (
    <FlexBox container padding={"0 20px"}>
      <div className="main-content">
        <div className="employee-card">
          <h2>Employee Name</h2>
          <p>ID: EMP001</p>
          <p>Task: Task Description</p>
          <p>Time Taken: 2 hours</p>
        </div>
      </div>
    </FlexBox>
  );
};

export default Home;
