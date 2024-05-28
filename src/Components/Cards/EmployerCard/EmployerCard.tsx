import { FlexBox } from "../../Flexbox/FlexBox";

interface EmployerCardProps {
    name: string;
    age: number;
}

const EmployerCard:React.FC<EmployerCardProps> = ({name,age}) => {
  return (
     <FlexBox container padding={"0 20px"} style={{flexDirection:"column",gap:"10px"}}>
             <span>{name}</span>
             <span>{age}</span>
     </FlexBox>
  )
}

export default EmployerCard