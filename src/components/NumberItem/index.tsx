import React, { useEffect, useState } from 'react';
import Input from '@/components/ui/Input.tsx';
import Button from '@/components/ui/button.tsx';
import {
  calculateArithmeticMean,
  getHighestNumber,
  getLowestNumber,
} from '@/components/NumberItem/helpers.ts';
import { useDebounce } from '@/hooks/useDebounce.ts';
import useLocalStorage from '@/hooks/useLocalStorage.ts';
import {
  DEFAULT_STORAGE_VALUE,
  NUMBERS_STORAGE_KEY,
} from '@/utils/constants.ts';

interface IProps {
  itemNumber: number;
  handleDeleteItem: () => void;
  index: number;
}

const NumberItem: React.FC<IProps> = ({
  itemNumber,
  handleDeleteItem,
  index,
}) => {
  const { storageItem, setItem } = useLocalStorage(
    NUMBERS_STORAGE_KEY,
    DEFAULT_STORAGE_VALUE
  );

  const [value, setValue] = useState(String(itemNumber));
  const debounceValue = useDebounce(Number(value), 300);

  useEffect(() => {
    // parse the stored array
    const parsedData = JSON.parse(
      storageItem ?? DEFAULT_STORAGE_VALUE
    ) as number[];

    const updatedData = parsedData.map((num, currentIndex) =>
      currentIndex === index ? debounceValue : num
    );

    setItem(JSON.stringify(updatedData));
  }, [debounceValue, storageItem, setItem, index]);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-between">
        <Input type="number" value={value} handleChangeValue={setValue} />
        <Button onClick={handleDeleteItem}>Delete</Button>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex gap-[4px]">
          <div>Arithmetic mean</div>
          <div>{calculateArithmeticMean(value)}</div>
        </div>
        <div className="flex gap-[4px]">
          <div>Min</div>
          <div>{getLowestNumber(value)}</div>
        </div>
        <div className="flex gap-[4px]">
          <div>Max</div>
          <div>{getHighestNumber(value)}</div>
        </div>
      </div>
    </div>
  );
};

export default NumberItem;
