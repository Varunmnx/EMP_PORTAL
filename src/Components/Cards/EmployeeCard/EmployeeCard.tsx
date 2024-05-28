import { FlexBox } from "../../Flexbox/FlexBox";

interface EmployeeCardProps {
    name: string;
    age: number;
}

const EmployeeCard:React.FC<EmployeeCardProps> = ({name,age}) => {
  return (
     <FlexBox backgroundColor="red" container padding={"0 20px"} style={{flexDirection:"column",gap:"10px"}}>
             <span>{name}</span>
             <span>{age}</span>
     </FlexBox>
  )
}

export default EmployeeCard