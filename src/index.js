import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import theme from './components/chakraUi/theme';
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from 'react-query';
import { queryClient } from './reactQuery/queryClient.js';
import "@fontsource/montserrat/100.css"
import "@fontsource/montserrat/200.css"
import "@fontsource/montserrat/300.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
