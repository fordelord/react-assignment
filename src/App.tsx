import CreateNumber from '@/components/CreateNumber';
import { useEffect, useState } from 'react';
import NumbersList from '@/components/NumbersList';
import useLocalStorage from '@/hooks/useLocalStorage.ts';
import {
  DEFAULT_STORAGE_VALUE,
  NUMBERS_STORAGE_KEY,
} from '@/utils/constants.ts';

function App() {
  const { storageItem, setItem } = useLocalStorage(
    NUMBERS_STORAGE_KEY,
    DEFAULT_STORAGE_VALUE
  );

  const [numbers, setNumbers] = useState<number[]>([]);

  const handleCreateNumber = (value: number): void => {
    setNumbers((prev) => {
      const updatedValue = [...prev, value];

      const stringData = JSON.stringify(updatedValue);
      setItem(stringData);

      return updatedValue;
    });
  };

  const handleDeleteNumber = (index: number): void => {
    setNumbers((prev) => {
      const filteredNumbers = prev.filter(
        (_, numberIndex) => numberIndex !== index
      );

      const stringData = JSON.stringify(filteredNumbers);
      setItem(stringData);

      return filteredNumbers;
    });
  };

  useEffect(() => {
    const parsedData = JSON.parse(storageItem ?? DEFAULT_STORAGE_VALUE);

    // Initial set data from storage
    setNumbers(parsedData);
  }, []);

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col">
        <NumbersList
          numbers={numbers}
          handleDeleteNumber={handleDeleteNumber}
        />
        <CreateNumber handleCreateNumber={handleCreateNumber} />
      </div>
    </div>
  );
}

export default App;
