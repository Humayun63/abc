import React from "react"
import { Button, Checkbox, Input, InputField, RadioButton, SelectButton, Textarea, ToggleButton } from "../components"
const Preview = () =>{
    return(
        <>
            <Button>Hello</Button>
            <Button className="text-red-800">nice</Button>
            <Input/>
            <Checkbox />
            <InputField />
            <RadioButton />
            <Textarea />
            <ToggleButton/>
            <SelectButton />
        </>
    )
}

export default Preview;