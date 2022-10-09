import { Group, Input, InputLabel } from './formInput.styles';

const FormInput = ({ label, ...otherProps }) => (
  <Group>
    <Input {...otherProps} />
    {label && <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>}
  </Group>
);

export default FormInput;
