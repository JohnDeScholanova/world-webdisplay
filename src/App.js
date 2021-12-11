import logo from './logo.svg';
import './App.css';
import Map from './maps/Amaze.json';


function App() {
	console.log(Map.cells);
	var lines = [], cols;
	for(var i = 0; i < Map.cells.length; i++) {
		cols = [];
		for(var j = 0; j < Map.cells[i].length; j++) {
			if (Map.cells[i][j].type.name === 'wall' )
				cols.push(<div key={j} className="cell wall" />);

			else {
				if ( Map.cells[i][j].players.length )
					cols.push(<div key={j} className="cell players" />);
				else cols.push(<div key={j} className="cell" />);
			}
		}
		lines.push(<div key={i} className="line">{cols}</div>);
	}
	return <div className="map">{lines}</div>;
}

export default App;
