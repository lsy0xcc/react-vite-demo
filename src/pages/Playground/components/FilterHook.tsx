import { Checkbox } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import useFilter from '../../../hooks/useFilter';
import FilterItem from '../../../models/FilterItem.model';

export default function FilterHook() {
  const filterList: FilterItem<number>[] = useMemo(
    () => [
      {
        label: '30分',
        value: 30,
      },
      {
        label: '60分',
        value: 60,
      },
      {
        label: '90分',
        value: 90,
      },
      {
        label: '120分',
        value: 120,
      },
    ],
    [],
  );
  const { selectedList, isAllSelected, isNoSelected, toggle, toggleAll } =
    useFilter(filterList.length);

  const [selectedItems, setSelectedItems] = useState<FilterItem<number>[]>([]);
  useEffect(() => {
    setSelectedItems(
      filterList.filter((_element, index) => selectedList[index]),
    );
  }, [filterList, selectedList]);
  // const selectedItems = useMemo(
  //   () => filterList.filter((_element, index) => selectedList[index]),
  //   [selectedList, filterList],
  // );

  return (
    <div>
      <h2>Custom hooks</h2>
      <div className="">配信時間</div>
      <div>
        <Checkbox checked={isAllSelected} onChange={toggleAll}>
          全て
        </Checkbox>
        {filterList.map((element, index) => (
          <Checkbox
            key={element.value}
            checked={selectedList[index]}
            onChange={() => {
              toggle(index);
            }}
          >
            {element.label}
          </Checkbox>
        ))}
      </div>
      <div>
        selectedList: {selectedList.toString()}
        <br />
        isAllSelected: {isAllSelected ? 'true' : 'false'}
        <br />
        isNoSelected: {isNoSelected ? 'true' : 'false'}
        <br />
        selected: {JSON.stringify(selectedItems)}
      </div>
    </div>
  );
}
