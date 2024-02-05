import { FieldContent } from "./style";
import { Input } from '../Input';
import { Label } from '../Label';


export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeHolder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength
}) => {
    return(
    <FieldContent fieldWidth={fieldWidth}>
    <Label textLabel={textLabel}/>

    <Input 
    editable={editable}
    placeholder={placeHolder}
    keyType={keyType}
    maxLength={maxLength}
    fieldValue={fieldValue}
    onChangeText={onChangeText}
    />
    </FieldContent>     
    )
}
