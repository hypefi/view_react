import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';

const Providers = ({ children }) => (
  <StoreProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </StoreProvider>
);

export default Providers;
