const config = {
  apiUrl: import.meta.env.PROD 
    ? 'https://csa-server-nine.vercel.app/'
    : 'http://localhost:3000'
};

export default config;
