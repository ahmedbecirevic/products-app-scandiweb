import Input from '../../../UI/Input/Input';

const Furniture = () => {
  return (
    <>
      <Input id='height' type='text' label='Height (CM)' />
      <Input id='width' type='text' label='Width (CM)' />
      <Input id='length' type='text' label='Length (CM)' />
    </>
  );
};

export default Furniture;
