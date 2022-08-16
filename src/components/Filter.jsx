import s from './Phonebook.module.css';
import { changeFilter } from 'redux/actions';
import { useDispatch } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = value => dispatch(changeFilter(value));
  function change(e) {
    filter(e.target.value);
  }
  return (
    <label>
      Find contacts by name
      <input className={s.filter} type="text" onChange={change} />
    </label>
  );
};
export default Filter;
