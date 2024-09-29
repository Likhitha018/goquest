
import React from "react";
import { useState } from "react";

  const DialogueEditor = () => {
    const [originalText, setOriginalText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
  
    return (
      <div>
        <textarea 
          value={originalText} 
          onChange={(e) => setOriginalText(e.target.value)} 
          placeholder="Original Text"
        />
        <textarea 
          value={translatedText} 
          onChange={(e) => setTranslatedText(e.target.value)} 
          placeholder="Translated Text"
        />
      </div>
    );
  };
  export default DialogueEditor
  