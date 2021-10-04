import { useEffect, useReducer, useState } from 'react';
import Input from '../../../UI/Input/Input';

const defaultFunritureState = {
  height: '',
  width: '',
  length: '',
  heightIsValid: undefined,
  widthIsValid: undefined,
  lengthIsValid: undefined,
};

const furnitureReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HEIGHT':
      return {
        ...state,
        heightIsValid: action.val.trim().length > 0,
        height: action.val,
      };
    case 'ADD_WIDTH':
      return {
        ...state,
        widthIsValid: action.val.trim().length > 0,
        width: action.val,
      };
    case 'ADD_LENGTH':
      return {
        ...state,
        lengthIsValid: action.val.trim().length > 0,
        length: action.val,
      };
    default:
      return defaultFunritureState;
  }
};

const Furniture = ({ checkIsValid }) => {
  const [isValid, setIsValid] = useState(false);
  const [furniture, dispatchFurniture] = useReducer(
    furnitureReducer,
    defaultFunritureState
  );

  const furnitureInputHandler = event => {
    // get the right type of action from the id of input field
    const type = `ADD_${event.target.id.toUpperCase()}`;
    dispatchFurniture({ type: type, val: event.target.value });
  };

  const { heightIsValid, widthIsValid, lengthIsValid } = furniture;

  useEffect(() => {
    setIsValid(heightIsValid && widthIsValid && lengthIsValid);
  }, [heightIsValid, widthIsValid, lengthIsValid]);

  useEffect(() => {
    checkIsValid(isValid);
  }, [isValid]);

  return (
    <>
      <Input
        id='height'
        type='text'
        label='Height (CM)'
        onChange={furnitureInputHandler}
      />
      <Input
        id='width'
        type='text'
        label='Width (CM)'
        onChange={furnitureInputHandler}
      />
      <Input
        id='length'
        type='text'
        label='Length (CM)'
        onChange={furnitureInputHandler}
      />
    </>
  );
};

export default Furniture;
