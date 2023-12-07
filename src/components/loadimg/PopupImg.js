import { useDispatch, useSelector } from 'react-redux';
import classes from './PopupImg.module.css';
import { uiAction } from '../../store/ui-slice';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function PopupImg() {
  const selectedImg = useSelector(state => state.ui.selectedProduct);
  console.log(selectedImg);

  const dispatch = useDispatch();
  const hidePopup = () => {
    dispatch(uiAction.hidePopup());
  };
  return (
    <div className={classes.PopupImg}>
      <div className={classes.backdrop} onClick={hidePopup}></div>
      <div className={classes['img-content']}>
        <LazyLoadImage src={selectedImg.src.original} alt="" effect="blur" />
      </div>
    </div>
  );
}
