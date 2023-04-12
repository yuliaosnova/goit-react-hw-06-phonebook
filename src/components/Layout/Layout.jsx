import Filter from 'components/Filter/Filter';
import css from './Layout.module.css';

export const Layout = ({toggleModal}) => {
  return (
    <div className={css.Layout}>
      <header className={css.Header}>
        <h1 className={css.Title}>Phonebook</h1>
        <Filter />
        <button className={css.AddBtn} onClick={toggleModal}>ADD CONTACT</button>
        {/* <div className={css.Enter}>
          <button className={css.EnterBtn}>log in</button>
          <button className={css.EnterBtn}>Sign up</button>
        </div> */}
      </header>
      <main>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense> */}
      </main>
    </div>
  );
};
