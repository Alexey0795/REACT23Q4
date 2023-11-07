import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function PaginationComponent() {
  const [searchParams] = useSearchParams();
  const [pageInput, setPageInput] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Effect');
    getPageParam();
  });

  const getPageParam = () => {
    console.log(searchParams);
  };

  const goPage = useCallback(
    (cmd: string) => () => {
      if (cmd === '1') {
        navigate(`/?page=${1}`);
      } else if (cmd === '-1') {
        navigate(`/?page=${+pageInput - 1}`);
      } else if (cmd === '+1') {
        navigate(`/?page=${+pageInput + 1}`);
      } else if ((cmd = 'last')) {
        navigate(`/?page=${6}`);
      }
    },
    []
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(event.target.value);
    navigate(`/?page=${event.target.value}`);
    console.log(`state: ${pageInput}`);
  };
  return (
    <div id="pag">
      <button onClick={goPage('1')}>{'1'}</button>

      <button onClick={goPage('-1')}>{'<'}</button>

      <input
        type="text"
        value={pageInput}
        onChange={onInputChange}
        placeholder={`page: ${pageInput}`}
      ></input>

      <button onClick={goPage('+1')}>{'>'}</button>

      <button onClick={goPage('last')}>{'last'}</button>
    </div>
  );
}
