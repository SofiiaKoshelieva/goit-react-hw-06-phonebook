import Phonebook from './components/Phonebook';

export const App = store => {
  return (
    <div>
      <Phonebook store={store} />
    </div>
  );
};
