import { Radio as ChakraRadio, RadioGroup } from "@chakra-ui/react";

function Radio({ name, field, radioOptions, radioProperties }) {
  return (
    <RadioGroup
      display="flex"
      gridColumnGap={4}
      {...radioProperties?.radioGroupProps}
      {...field}
      id={name}
    >
      {radioOptions.map((radioOption) => (
        <ChakraRadio
          {...radioProperties?.radioProps}
          key={radioOption.label}
          {...field}
          value={radioOption.value}
        >
          {radioOption.label}
        </ChakraRadio>
      ))}
    </RadioGroup>
  );
}

export default Radio;
