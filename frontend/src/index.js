import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import QueryProducts from './pages/QueryProducts';
import './index.css';
const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<QueryClientProvider client={client}>
		<QueryProducts />
	</QueryClientProvider>
);

