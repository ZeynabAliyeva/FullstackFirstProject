import axios from 'axios';
import { useQuery } from 'react-query';

const App = () => {
	const { data, isLoading } = useQuery('categories', () => {
		return axios.get('http://localhost:8080/products').then((res) => res.data);
	});

	if (isLoading) return <h1>loading ...</h1>;

	return (
		<table className="w3-table-all">
			<thead className="w3-light-grey">
				<tr>
					<th>Name</th>
					<th>Description</th>
          <th>Date</th>
				</tr>
        
			</thead>
			<tbody>
				{data?.map((product) => (
					<tr key={product.id}>
						<td>{product.name}</td>
						<td>{product.description}</td>
            <td>{product.date}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};



export default App;

