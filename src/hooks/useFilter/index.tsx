import { useEffect, useState } from 'react';

export default function useFilter(len: number) {
  const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
  const [isNoSelected, setIsNoSelected] = useState<boolean>(false);
  const [selectedList, setSelectedList] = useState<boolean[]>([]);
  useEffect(() => {
    setSelectedList(new Array(len).fill(true));
  }, [len]);
  const toggle = (index: number) => {
    if (index < selectedList.length) {
      const newCheckedArray = [...selectedList];
      newCheckedArray[index] = !selectedList[index];
      setSelectedList(newCheckedArray);
      setIsNoSelected(!newCheckedArray.reduce((pre, cur) => pre || cur, false));
      setIsAllSelected(newCheckedArray.reduce((pre, cur) => pre && cur, true));
    }
  };
  const toggleAll = () => {
    const newData = !isAllSelected;
    setIsAllSelected(newData);
    setIsNoSelected(!newData);
    setSelectedList(new Array(selectedList.length).fill(newData));
  };

  return { selectedList, isAllSelected, isNoSelected, toggle, toggleAll };
}
