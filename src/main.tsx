import * as React from 'react';
import { createRoot } from 'react-dom/client'
import '@fontsource/cormorant/400.css'
import '@fontsource/cormorant/600.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import App from './App'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);