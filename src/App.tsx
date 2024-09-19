import './App.css';
import { Dropzone } from './component/dropzone';
import { UnderlineSelect } from './component/underlineSelect';

function App() {
  return (
    <>
      <div className="w-full flex justify-center items-center mb-20 text-white font-bold gap-10 px-10">
        <UnderlineSelect
          options={[
            { value: 'ICS', label: 'ICS' },
            { value: 'XMLNS', label: 'XMLNS' },
          ]}
          title="File"
        />
        <span className="text-green-500">To</span>
        <UnderlineSelect
          options={[
            { value: 'XMLNS', label: 'XMLNS' },
            { value: 'ICS', label: 'ICS' },
          ]}
          title="File"
        />
        <button
          type="button"
          className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-green-800"
        >
          Convertir
        </button>
      </div>
      <Dropzone />
    </>
  );
}

export default App;
