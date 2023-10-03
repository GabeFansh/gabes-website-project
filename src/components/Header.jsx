import styles from '@/styles/Header.module.css';

const Header = (props) => {
  const headerStyle = {
    padding: '50px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className={styles.header}>
      <h1>{props.children}</h1>
    </header>
  );
};
export default Header;