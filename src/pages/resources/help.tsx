import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Help = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your GrowIQ assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-8d0507776fd84ed08af6ead053279319'
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content: `You are GrowIQ's AI help assistant. GrowIQ is an educational technology company that provides:

1. School Management Solutions
   - Transport management
   - Library management
   - Timetable scheduling
   - Fee management
   - Attendance tracking
   - And more

2. College Management Solutions
   - Campus management
   - Research tracking
   - Higher education specific features

3. E-Learning Platform
   - Virtual classrooms
   - Digital learning tools
   - Interactive content

4. Government Educational Solutions
   - Multi-institution management
   - Scalable deployment
   - Centralized oversight

Important Guidelines:
- Only answer questions related to GrowIQ's services and products
- If a question is outside GrowIQ's scope, respond with "This falls outside the scope of GrowIQ's core service offerings"
- Keep responses concise and professional
- Use clear formatting without markdown symbols
- For pricing information, explain the factors that affect pricing and recommend scheduling a consultation
- Highlight key points using natural language without special characters
- Use proper sentence structure and paragraphs for readability

When discussing pricing models, explain them as:
1. Subscription-Based (Monthly/Annual SaaS plans)
2. One-Time License Fee (For on-premises solutions)
3. Government/Enterprise Plans (For multiple institutions)

For pricing factors, clearly state that it depends on:
- Number of students (scalable for small to large institutions)
- Required modules (such as attendance, fees, transport)
- Deployment type (cloud-based or on-premises)
- Support and training requirements`
            },
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: "user",
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content;
      
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I\'m having trouble connecting to the server. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-accent-600 to-growiq-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                GrowIQ Help Center
              </h1>
              <p className="text-lg opacity-90">
                Get instant answers to your questions about GrowIQ's educational technology solutions
              </p>
            </div>
          </div>
        </section>

        {/* Chat Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Chat Messages */}
                <div className="h-[500px] overflow-y-auto p-6">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        message.role === 'assistant' ? 'flex' : 'flex justify-end'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-xl ${
                          message.role === 'assistant'
                            ? 'bg-gray-100 text-gray-800 prose prose-sm max-w-none'
                            : 'bg-accent-600 text-white'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex mb-4">
                      <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Thinking...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your question here..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent-500 focus:border-accent-500"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-accent-600 text-white px-4 py-2 rounded-lg hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Help Tips */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Sample Questions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• What school management features do you offer?</li>
                    <li>• How does your e-learning platform work?</li>
                    <li>• Tell me about your college management solutions</li>
                    <li>• What are your government education offerings?</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Tips</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Be specific with your questions</li>
                    <li>• Ask about one topic at a time</li>
                    <li>• Questions should be related to GrowIQ services</li>
                    <li>• Use clear and simple language</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Help; 