import React, { useState } from 'react';
import Input from '@/components/ui/Input.tsx';
import Button from '@/components/ui/button.tsx';
import Typography from '@/components/ui/typography';
import { ETypographyVariant } from '@/components/ui/typography/types.ts';

interface IProps {
  handleCreateNumber: (value: number) => void;
}

// Create number component
const CreateNumber: React.FC<IProps> = ({ handleCreateNumber }) => {
  const [value, setValue] = useState('');

  const resetInputValue = (): void => {
    setValue('');
  };

  const handleCreateClick = (): void => {
    const convertedValue = Number(value.trim());

    if (isNaN(convertedValue)) {
      return;
    }

    handleCreateNumber(convertedValue);

    resetInputValue();
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <Typography variant={ETypographyVariant.HEADING_XL}>
        Create number
      </Typography>
      <Input type="number" value={value} handleChangeValue={setValue} />
      <Button onClick={handleCreateClick}>Create</Button>
    </div>
  );
};

export default CreateNumber;
