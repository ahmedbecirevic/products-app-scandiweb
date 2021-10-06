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

const Furniture = ({ checkIsValid, getState }) => {
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

  const { height, width, length } = furniture;

  useEffect(() => {
    checkIsValid(isValid);
    getState(`${height}x${width}x${length}`);
  }, [isValid, checkIsValid, getState, height, width, length]);

  return (
    <>
      <Input
        id='height'
        type='text'
        label='Height (CM)'
        onChange={furnitureInputHandler}
        value={furniture.height}
        pattern='([0-9]+\.?[0-9]*|\.[0-9]+)$'
      />
      <Input
        id='width'
        type='text'
        label='Width (CM)'
        onChange={furnitureInputHandler}
        value={furniture.width}
        pattern='([0-9]+\.?[0-9]*|\.[0-9]+)$'
      />
      <Input
        id='length'
        type='text'
        label='Length (CM)'
        onChange={furnitureInputHandler}
        value={furniture.length}
        pattern='([0-9]+\.?[0-9]*|\.[0-9]+)$'
      />
      <p>Please, provide dimensions in HxWxL format!</p>
    </>
  );
};

export default Furniture;
