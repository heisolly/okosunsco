
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, ExternalLink, Sparkles, ChevronRight, Scale } from 'lucide-react';
import { sendMessage } from '../services/geminiService';
import { ChatMessage } from '../types';
import { CHAT_SUGGESTIONS } from '../constants';

const LegalAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setIsTyping(true);

    try {
      const response = await sendMessage(newHistory);
      setMessages([...newHistory, response]);
    } catch (error) {
      console.error(error);
      setMessages([...newHistory, { role: 'model', text: "I'm currently unable to reach the strategic core. Please contact our partners via phone for immediate assistance." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-accent p-4 rounded-full shadow-2xl hover:bg-accent hover:text-white transition-all duration-500 group flex items-center gap-3 border border-accent/20"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-[10px] uppercase tracking-[0.2em] font-bold">
            Legal Strategist
          </span>
          <MessageSquare className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-[380px] md:w-[420px] h-[600px] bg-white/95 border border-accent/30 rounded-2xl shadow-[0_32px_64px_-16px_rgba(14,14,18,0.3)] flex flex-col overflow-hidden backdrop-blur-2xl transition-all duration-500 animate-in fade-in zoom-in slide-in-from-bottom-8">
          {/* Header */}
          <div className="p-5 bg-primary text-white flex justify-between items-center border-b border-accent/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg leading-tight tracking-tight">AI Strategist</h3>
                <p className="text-[9px] text-accent uppercase tracking-[0.15em] font-bold">OkoSlaw Counsel Platform</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat area */}
          <div ref={chatRef} className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-accent/20">
            {messages.length === 0 && (
              <div className="h-full flex flex-col justify-center items-center text-center px-4">
                <div className="mb-6 opacity-40">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/20">
                    <Scale className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h4 className="font-serif text-xl text-primary mb-2">Welcome to OkoSlaw</h4>
                <p className="text-xs text-secondary/70 mb-8 leading-relaxed italic">
                  "Strategic foresight is the foundation of every victory."<br/>
                  How may our counsel assist you today?
                </p>
                <div className="w-full space-y-2">
                  {CHAT_SUGGESTIONS.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(s.text)}
                      className="w-full text-left p-3 text-[11px] border border-accent/10 hover:border-accent hover:bg-accent/5 rounded-xl transition-all group flex items-center justify-between"
                    >
                      <span className="text-primary/80 font-medium">{s.label}</span>
                      <ChevronRight className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-primary text-white rounded-br-none shadow-lg' 
                  : 'bg-ivory border border-accent/10 text-primary rounded-bl-none'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  {msg.groundingUrls && msg.groundingUrls.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-accent/20">
                      <p className="text-[10px] uppercase tracking-wider font-bold mb-2 text-accent">Verified Legal Resources:</p>
                      <div className="grid grid-cols-1 gap-2">
                        {msg.groundingUrls.map((url, i) => (
                          <a 
                            key={i} 
                            href={url.uri} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 p-2 bg-white/50 rounded-lg text-[10px] text-primary/70 hover:text-accent hover:bg-white transition-all"
                          >
                            <ExternalLink className="w-3 h-3 shrink-0" />
                            <span className="truncate">{url.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-ivory border border-accent/10 p-4 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Input */}
          <div className="p-5 border-t border-accent/10 bg-white">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about legal strategy..."
                  className="w-full bg-ivory/50 border border-accent/20 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent focus:bg-white transition-all"
                />
              </div>
              <button
                onClick={() => handleSend()}
                disabled={isTyping || !input.trim()}
                className="bg-primary text-white p-3 rounded-xl hover:bg-accent transition-all disabled:opacity-30 disabled:hover:bg-primary shadow-md hover:shadow-lg"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-[9px] text-secondary/60">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>AI Prelim Strategy System • Not Formal Advice</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalAssistant;
