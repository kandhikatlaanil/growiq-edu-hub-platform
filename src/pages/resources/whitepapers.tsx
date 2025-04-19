import React, { useState } from 'react';
import { FileText, Download, Loader2, BookOpen } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { marked } from 'marked';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

// Define theme colors
const THEME = {
  primary: rgb(0.145, 0.388, 0.933),    // #2563eb
  secondary: rgb(0.31, 0.31, 0.31),     // #4F4F4F
  accent: rgb(0.933, 0.365, 0.365),     // #ee5d5d
  text: rgb(0.2, 0.2, 0.2),            // #333333
  lightText: rgb(0.4, 0.4, 0.4),       // #666666
  background: rgb(0.98, 0.98, 0.98),   // #fafafa
};

const SAMPLE_CONTENT = `# Introduction
The education landscape is rapidly evolving with technological advancements. This whitepaper explores key aspects and future directions.

# Key Findings
- Digital transformation is accelerating in education
- AI and machine learning are becoming essential tools
- Remote learning capabilities are expanding
- Personalized learning paths are more achievable

# Methodology
Our research involved comprehensive analysis of:
- Current educational technologies
- Implementation case studies
- Student and teacher feedback
- Market trends and future projections

# Analysis
The data reveals several important trends:
- Increased adoption of digital learning platforms
- Higher engagement with interactive content
- Better learning outcomes through personalization
- Cost-effective scalable solutions

# Conclusion
Educational technology continues to evolve and shape the future of learning. The key to success lies in proper implementation and continuous adaptation.`;

const Whitepapers = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedPdf, setGeneratedPdf] = useState('');

  const generateWhitepaper = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setGeneratedPdf('');

    try {
      let content = '';
      
      try {
        // Generate content using Deepseek API
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
                content: "You are an expert content writer specializing in educational technology and digital learning solutions. Generate a comprehensive whitepaper on the given topic. Format the content in a professional style with clear section headers in markdown format."
              },
              {
                role: "user",
                content: `Generate a detailed whitepaper on the topic: ${topic}. Include sections for introduction, key findings, methodology, analysis, and conclusion. Format it in markdown with clear section headers.`
              }
            ],
            temperature: 0.7,
            max_tokens: 2000
          })
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (!data.choices?.[0]?.message?.content) {
          throw new Error('Invalid response format from API');
        }

        // Remove any emojis from the generated content
        content = data.choices[0].message.content.replace(/[\u{1F300}-\u{1F9FF}]/gu, '');
      } catch (apiError: any) {
        console.error('API Error:', apiError);
        setError(`API Error: ${apiError.message || 'Failed to generate content'}. Using fallback content.`);
        content = SAMPLE_CONTENT.replace(/Introduction/g, topic);
      }

      if (!content) {
        throw new Error('No content generated');
      }

      // Create PDF with improved formatting
      try {
        const pdfDoc = await PDFDocument.create();
        const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        
        let currentPage = pdfDoc.addPage([595.276, 841.890]); // A4 size
        let { width, height } = currentPage.getSize();
        
        // Calculate padding (6% of width and height)
        const horizontalPadding = width * 0.06;
        const verticalPadding = height * 0.06;
        const contentWidth = width - (2 * horizontalPadding);
        
        let yOffset = height - verticalPadding;

        // Add GrowIQ branding header
        currentPage.drawRectangle({
          x: 0,
          y: height - 100, // Adjusted for smaller padding
          width: width,
          height: 100,
          color: THEME.primary,
        });

        // Add title with white color for better contrast
        currentPage.drawText('GrowIQ Whitepaper', {
          x: horizontalPadding,
          y: height - 65, // Adjusted position for better spacing
          size: 28,
          font: helveticaBold,
          color: rgb(1, 1, 1),
        });

        yOffset = height - 140; // Adjusted spacing after header

        // Add topic section with proper padding
        currentPage.drawRectangle({
          x: horizontalPadding,
          y: yOffset - 40,
          width: contentWidth,
          height: 50,
          color: rgb(0.95, 0.95, 0.95),
        });

        currentPage.drawText(topic, {
          x: horizontalPadding + 10,
          y: yOffset - 25,
          size: 16,
          font: helveticaBold,
          color: THEME.primary,
          maxWidth: contentWidth - 20,
        });

        yOffset -= 80; // Adjusted spacing after topic

        // Process content sections
        const sections = content.split('\n#').map(section => section.trim());
        
        for (const section of sections) {
          if (section.length === 0) continue;

          const lines = section.split('\n');
          const sectionTitle = lines[0].replace(/^#+\s*/, '').trim();
          
          // Check if we need a new page
          if (yOffset < verticalPadding + 100) {
            currentPage = pdfDoc.addPage([595.276, 841.890]);
            yOffset = height - verticalPadding;
          }

          // Draw section header background
          currentPage.drawRectangle({
            x: horizontalPadding,
            y: yOffset - 10,
            width: contentWidth,
            height: 40,
            color: rgb(0.97, 0.97, 1),
          });

          // Draw section title
          if (sectionTitle) {
            currentPage.drawText(sectionTitle, {
              x: horizontalPadding + 10,
              y: yOffset + 10,
              size: 14,
              font: helveticaBold,
              color: THEME.primary,
              maxWidth: contentWidth - 20,
            });
          }

          yOffset -= 60; // Increased spacing after section title

          // Draw content
          for (let i = 1; i < lines.length; i++) {
            let line = lines[i].trim();
            if (line.length === 0) continue;

            // Check if we need a new page
            if (yOffset < verticalPadding + 50) {
              currentPage = pdfDoc.addPage([595.276, 841.890]);
              yOffset = height - verticalPadding;
            }

            // Handle bullet points
            const isListItem = line.startsWith('- ') || line.startsWith('* ');
            const textToDraw = isListItem ? `  • ${line.substring(2)}` : line;
            
            try {
              // Word wrap for long lines
              const words = textToDraw.split(' ');
              let currentLine = '';
              const maxWidth = contentWidth - 20; // Account for padding

              for (const word of words) {
                const testLine = currentLine + word + ' ';
                const textWidth = helvetica.widthOfTextAtSize(testLine, 12);

                if (textWidth > maxWidth) {
                  if (currentLine.trim()) {
                    currentPage.drawText(currentLine.trim(), {
                      x: horizontalPadding + 10,
                      y: yOffset,
                      size: 12,
                      font: helvetica,
                      color: isListItem ? THEME.secondary : THEME.text,
                      maxWidth: maxWidth,
                    });
                    yOffset -= 20;
                  }
                  currentLine = word + ' ';

                  if (yOffset < verticalPadding + 50) {
                    currentPage = pdfDoc.addPage([595.276, 841.890]);
                    yOffset = height - verticalPadding;
                  }
                } else {
                  currentLine = testLine;
                }
              }

              if (currentLine.trim()) {
                currentPage.drawText(currentLine.trim(), {
                  x: horizontalPadding + 10,
                  y: yOffset,
                  size: 12,
                  font: helvetica,
                  color: isListItem ? THEME.secondary : THEME.text,
                  maxWidth: maxWidth,
                });
                yOffset -= 20;
              }
            } catch (textError) {
              console.error('Error drawing text:', textError);
              continue;
            }
          }

          yOffset -= 30; // Extra space between sections
        }

        // Add footer to each page
        const pageCount = pdfDoc.getPageCount();
        for (let i = 0; i < pageCount; i++) {
          const page = pdfDoc.getPage(i);
          const { height } = page.getSize();

          // Add footer background
          page.drawRectangle({
            x: 0,
            y: 0,
            width: width,
            height: 40,
            color: rgb(0.95, 0.95, 0.95),
          });

          // Add page numbers
          page.drawText(`Page ${i + 1} of ${pageCount}`, {
            x: horizontalPadding,
            y: 15,
            size: 10,
            font: helvetica,
            color: THEME.text,
          });

          // Add GrowIQ branding
          page.drawText('Generated by GrowIQ Educational Technology', {
            x: width - horizontalPadding - 200,
            y: 15,
            size: 10,
            font: helveticaBold,
            color: THEME.primary,
          });
        }

        // Save and display PDF
        const pdfBytes = await pdfDoc.save();
        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setGeneratedPdf(pdfUrl);
      } catch (pdfError) {
        console.error('PDF Generation Error:', pdfError);
        setError('Failed to generate PDF. Please try again. Error: ' + pdfError.message);
        throw pdfError;
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to generate whitepaper. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-accent-600 to-growiq-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Powered Whitepapers & E-Books
              </h1>
              <p className="text-lg opacity-90">
                Generate comprehensive whitepapers and e-books on educational technology topics using our AI-powered platform.
              </p>
            </div>
          </div>
        </section>

        {/* Generator Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-accent-600" />
                  Generate Your Whitepaper
                </h2>
                <form onSubmit={generateWhitepaper} className="space-y-4">
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Topic
                    </label>
                    <input
                      type="text"
                      id="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
                      placeholder="e.g., The Future of Digital Learning in Schools"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent-600 text-white py-2 px-4 rounded-md hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Generating...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <FileText className="w-5 h-5" />
                        Generate Whitepaper
                      </span>
                    )}
                  </button>
                </form>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                    {error}
                  </div>
                )}

                {generatedPdf && (
                  <div className="mt-6">
                    <a
                      href={generatedPdf}
                      download="generated-whitepaper.pdf"
                      className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700"
                    >
                      <Download className="w-5 h-5" />
                      Download Generated Whitepaper
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Why Use Our AI Whitepaper Generator?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Content</h3>
                  <p className="text-gray-600">
                    Generate high-quality, well-researched whitepapers using advanced AI technology.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Professional Formatting</h3>
                  <p className="text-gray-600">
                    Clean, well-structured PDFs with proper sections, headers, and page numbers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Customizable Topics</h3>
                  <p className="text-gray-600">
                    Generate whitepapers on any educational technology topic of your choice.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Instant Generation</h3>
                  <p className="text-gray-600">
                    Get your professionally formatted whitepaper in seconds.
                  </p>
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

export default Whitepapers; 