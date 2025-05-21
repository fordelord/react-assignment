import React from 'react';
import NumberItem from '@/components/NumberItem';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@/components/ui/typography';
import { ETypographyVariant } from '@/components/ui/typography/types.ts';

interface IProps {
  numbers: number[];
  handleDeleteNumber: (index: number) => void;
}

const NumbersList: React.FC<IProps> = ({ numbers, handleDeleteNumber }) => {
  return (
    <div>
      <Typography variant={ETypographyVariant.HEADING_XL}>
        Numbers list
      </Typography>
      <div className="flex flex-col gap-[10px]">
        {numbers.map((number, index) => (
          <NumberItem
            itemNumber={number}
            handleDeleteItem={() => handleDeleteNumber(index)}
            index={index}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
};

export default NumbersList;
