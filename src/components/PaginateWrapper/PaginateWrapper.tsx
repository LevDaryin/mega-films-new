import { useEffect, useState } from 'react';
import { useFilms } from '../../hooks/useFilms';

import ReactPaginate from 'react-paginate';

import '../../UI/styles/paginateStyle.css';

import { Film } from '@/store/types';

interface Props {
  itemsPerPage: number;
  addCurrentItems: (films: Film[]) => void;
}

const PaginateWrapper = ({ itemsPerPage, addCurrentItems }: Props) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const films = useFilms();

  useEffect(() => {
    if (films instanceof Array) {
      const endOffset = itemOffset + itemsPerPage;
      addCurrentItems(films.slice(itemOffset, endOffset));
      // передача Items в store
      setPageCount(Math.ceil(films.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, films, addCurrentItems]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % (films?.length ?? 0);
    setItemOffset(newOffset);
  };

  return (
    <div className="col-start-2">
      <ReactPaginate
        containerClassName={'listContainer'}
        breakLabel="..."
        breakClassName={'breakList'}
        breakLinkClassName={'breakLink'}
        nextLabel="Вперед"
        nextClassName={'nextButton'}
        nextLinkClassName={'nextLink'}
        previousLinkClassName={'previousLink'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        pageClassName={'page'}
        pageLinkClassName={'pageLink'}
        activeClassName={'activePage'}
        activeLinkClassName={'activeLink'}
        previousLabel="Назад"
        previousClassName={'previousButton'}
        renderOnZeroPageCount={undefined}
      />
    </div>
  );
};

export { PaginateWrapper };
