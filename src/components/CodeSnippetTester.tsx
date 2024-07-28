import { useState } from 'react';
import dynamic from 'next/dynamic';

const CodeEditor = dynamic(() => import('@uiw/react-textarea-code-editor'), { ssr: false });

interface CodeSnippetTesterProps {
  initialCode: string;
  language?: string; // Optional for language-specific highlighting and testing
}

const CodeSnippetTester: React.FC<CodeSnippetTesterProps> = ({ initialCode, language = 'javascript' }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [feedback, setFeedback] = useState<string[]>([]);

  const handleCodeChange = (value: string) => setCode(value);

  const executeCode = async () => {
    // ... (Logic for code execution in a sandboxed environment)

    try {
      // ... (Execute the code, potentially using an external service like CodeSandbox API)

      setOutput(result); // Assuming 'result' is the output from execution
      setFeedback(await getFeedback(code, language)); // Fetch feedback based on language
    } catch (error) {
      setOutput(error.message);
      setFeedback([]); // Clear feedback on error
    }
  };

  return (
    <div>
      <CodeEditor value={code} language={language} onChange={handleCodeChange} />

      <button onClick={executeCode}>Run Code</button>

      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>

      {feedback.length > 0 && (
        <div>
          <h3>Feedback:</h3>
          <ul>
            {feedback.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CodeSnippetTester;