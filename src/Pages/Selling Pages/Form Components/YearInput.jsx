import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import { useRef, useState } from "react"


function YearInput() {
    const [input, setInput] = useState(null)
    const inputYear=Number(input)
    
    console.log("Year->"+ typeof input2)
    console.log("Year->"+ inputYear)


    const handleInputChange = (e) => {
      setInput(e.target.value)
     
    }
  
    const isError = input === ''
  
    return (
      <FormControl isInvalid={isError} mb="15px">
        <FormLabel fontSize="12px" mb="1px" >Year *</FormLabel>
        <Input fontSize="12px" h="38px" borderRadius="2px"  type='number' value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText fontSize="12px">
            
          </FormHelperText>
        ) : (
          <FormErrorMessage mt="5px" fontSize="8px">Year is mandatory. Please complete the required field.</FormErrorMessage>
        )}
      </FormControl>
    )
  }
  export default YearInput