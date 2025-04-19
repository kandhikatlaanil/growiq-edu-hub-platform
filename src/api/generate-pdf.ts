import { NextApiRequest, NextApiResponse } from 'next';
import { marked } from 'marked';
import { createPdf } from '@react-pdf/renderer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    // Convert markdown to HTML
    const html = marked(content);

    // Create PDF document
    const pdfDoc = createPdf({
      content: [
        {
          text: 'Generated Whitepaper',
          style: 'header'
        },
        {
          text: html,
          style: 'content'
        }
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          margin: [0, 0, 0, 20]
        },
        content: {
          fontSize: 12,
          lineHeight: 1.5
        }
      }
    });

    // Generate PDF buffer
    const pdfBuffer = await pdfDoc.buffer();

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=generated-whitepaper.pdf');

    // Send PDF buffer
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
} 