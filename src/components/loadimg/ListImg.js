import { LazyLoadImage } from 'react-lazy-load-image-component';
import { createClient } from 'pexels';
import classes from './ListImg.module.css';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';
import 'react-lazy-load-image-component/src/effects/blur.css';
function ListImg() {
  const dispatch = useDispatch();
  // const dataSelected = useSelector(state => state.ui.selectedProduct);
  const [img, setImg] = useState(null);
  const searchRef = useRef();
  const [inputSearch, setInputSearch] = useState('');
  const client = createClient(
    'afLCn5DXiUEWNMo8ZujuOw6vtrV1h6VtwG3tAAlZjGNy7FC5QdFdUrs1'
  );
  console.log(img);
  // const query = inputSearch ? inputSearch : null;
  // useEffect(() => {
  //   client.photos
  //     // .search({ query: inputSearch, per_page: 50 })
  //     .curated({ per_page: 200 })
  //     .then(photos => setImg(photos));
  // }, [inputSearch]);

  const showPopup = product => {
    dispatch(uiAction.selectedProduct(product));
    dispatch(uiAction.showPopup());
  };

  const changesHandlerImg = e => {
    const dataInput = e.target.value;
    setInputSearch(dataInput);
  };
  console.log(inputSearch);

  const searchHandler = () => {
    if (inputSearch) {
      client.photos
        .search({ query: inputSearch, per_page: 200 })
        .then(photos => setImg(photos));
    }
    searchRef.current.value = '';
  };
  // console.log(img.photos);
  return (
    <>
      <div className={classes.boxSearch}>
        <label htmlFor="search">Tìm kiếm ảnh</label>
        <input
          type="text"
          id="search"
          placeholder="tìm ảnh"
          onChange={changesHandlerImg}
          ref={searchRef}
        />
        <button onClick={searchHandler}>Search</button>
      </div>
      {img && img.photos && (
        <ul className={classes.BoxImg}>
          {img.photos.map(item => (
            <li
              key={item.id}
              className={classes.ImgItem}
              onClick={() => showPopup(item)}
            >
              <LazyLoadImage
                src={item.src.original}
                alt={item.photographer}
                effect="blur"
                onClick={() => showPopup(item)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListImg;
