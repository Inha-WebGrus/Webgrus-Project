import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import ReactFocusLock from 'react-focus-lock';

const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  );
});

// 2. Create the form
const Form = ({ firstFieldRef, onCancel }) => {
  return (
    <Stack spacing={2}>
      <TextInput
        label="Title"
        id="first-name"
        ref={firstFieldRef}
        color="black"
      />
      <TextInput label="Text" id="last-name" color="black" />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button isDisabled colorScheme="teal">
          Submit
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const AddRequestForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="left"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size="sm" icon={<AddIcon />} bg="#c5dcfa" />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <ReactFocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </ReactFocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default AddRequestForm;
