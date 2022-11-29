/* eslint-disable @typescript-eslint/no-unused-vars */
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRequest } from 'ahooks';
import { useEffect, useRef, useState } from 'react';
import simpleReq from '../../../services/simpleReq';

export default function VirtualList() {
  const parentRef = useRef(null);
  const [list, setList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const { loading, runAsync } = useRequest(simpleReq.getList, {
    manual: true,
  });
  const rowVirtualizer = useVirtualizer<any, any>({
    count: hasNextPage ? list.length + 1 : list.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    overscan: 5,
  });

  useEffect(() => {
    const load = async () => {
      const virtulaItems = rowVirtualizer.getVirtualItems();

      if (virtulaItems && virtulaItems.length) {
        const lastItem = virtulaItems[virtulaItems.length - 1];
        if (
          lastItem &&
          !loading &&
          hasNextPage &&
          lastItem.index >= list.length - 1
        ) {
          const result = await runAsync(currentPage);
          setList(list.concat(result));
          setHasNextPage(result.length > 0);
          setCurrentPage(currentPage + 1);
        }
      }
    };
    load();
  });

  return (
    <div>
      <div
        ref={parentRef}
        className="List"
        style={{
          height: '500px',
          width: '100%',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const post = list[virtualRow.index];

            return (
              <div
                key={virtualRow.index}
                className={
                  virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'
                }
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {post ? JSON.stringify(post) : 'loading...'}
              </div>
            );
          })}
        </div>
      </div>
      <div>hasNextPage:{hasNextPage.toString()}</div>
    </div>
  );
}
