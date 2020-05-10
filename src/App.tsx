import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Header} from './components/Header';
import './App.css';
import {Symptoms} from './components/Symptoms';
import {PreventiveMeasures} from './components/PrevenativeMeasures';
import {Footer} from './components/Footer'
const theme = {
  primaryOne: '#ED7614',
  primaryOneMedium: '#FF9E10',
  primaryOneLight: '#FFF2D6',
  primaryTwo: '#7D57C9',
  primaryTwoLight: '#D6D1F2',
  background: 'white',
  foreground: '#252849',
  foregroundLight: '#6A6D89',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: theme.primaryTwoLight,
          overflowY: 'hidden',
          width: '100vw',
          fontFamily: "font-family: 'Roboto', sans-serif",
        }}>
        <Header />
        <Symptoms />
        <PreventiveMeasures />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
