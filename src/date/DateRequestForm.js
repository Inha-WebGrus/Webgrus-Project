import { AddIcon } from '@chakra-ui/icons';
import {
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
import React, { useRef } from 'react';
import { forwardRef } from 'react';
import ReactFocusLock from 'react-focus-lock';

const TextInput = forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  );
});

const Form = ({ element, onCancel }) => {
  return (
    <Stack spacing={2}>
      <TextInput label="Date" id="first-name" ref={element} color="black" />
      <TextInput label="Content" id="last-name" color="black" />
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
const DateRequestForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const element = useRef(null);

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={element}
        onOpen={onOpen}
        onClose={onClose}
        placement="left"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton
            size="sm"
            icon={<AddIcon />}
            color="gray.600"
            bg="gray.100"
          />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <ReactFocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form element={element} onCancel={onClose} />
          </ReactFocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DateRequestForm;
