import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const options = [
  { value: "alphabets", label: "Alphabets" },
  { value: "numbers", label: "Numbers" },
  { value: "highestAlphabet", label: "Highest Alphabet" }
];

export default function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [isValidJson, setIsValidJson] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    document.title = "Your Roll Number"; // Replace with your actual roll number
  }, []);

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      setIsValidJson(true);
      const res = await axios.post("http://localhost:8080/api/process", parsedData);
      setResponse(res.data);
    } catch (error) {
      setIsValidJson(false);
      console.error("Invalid JSON or API error", error);
    }
  };

  const filteredResponse = () => {
    if (!response) return null;
    let filtered = {};
    if (selectedOptions.some(opt => opt.value === "alphabets")) {
      filtered.alphabets = response.alphabets;
    }
    if (selectedOptions.some(opt => opt.value === "numbers")) {
      filtered.numbers = response.numbers;
    }
    if (selectedOptions.some(opt => opt.value === "highestAlphabet")) {
      filtered.highestAlphabet = response.highestAlphabet;
    }
    return filtered;
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">JSON Processor</h1>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows="4"
        placeholder='Enter JSON (e.g. { "data": ["A","C","z"] })'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      {!isValidJson && <p className="text-red-500">Invalid JSON format</p>}
      <button
        className="bg-blue-500 text-white p-2 rounded w-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {response && (
        <div className="mt-4">
          <Select
            isMulti
            options={options}
            onChange={setSelectedOptions}
          />
          <pre className="mt-4 p-2 bg-gray-200 rounded">{JSON.stringify(filteredResponse(), null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
