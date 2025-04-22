
import React from 'react';
import { marked } from 'marked';
import { Document, Page, Text, StyleSheet, pdf } from '@react-pdf/renderer';
import { PDFDocument } from 'pdf-lib';

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

// Create the PDF document component
const PdfDocument = ({ content }: { content: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Generated Whitepaper</Text>
      <Text style={styles.content}>{content}</Text>
    </Page>
  </Document>
);

// Generate PDF function for client-side use
export const generatePdf = async (content: string): Promise<Blob> => {
  try {
    // Convert markdown to plain text (removing HTML tags)
    const html = marked(content);
    // Ensure html is a string before using replace
    const plainText = typeof html === 'string' ? html.replace(/<[^>]*>?/gm, '') : String(html);

    // Create the PDF
    const pdfDoc = <PdfDocument content={plainText} />;
    const pdfBlob = await pdf(pdfDoc).toBlob();
    return pdfBlob;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF');
  }
};

// Generate PDF function for downloading
export const downloadPdf = async (content: string, filename = 'generated-whitepaper.pdf'): Promise<void> => {
  try {
    const pdfBlob = await generatePdf(content);
    
    // Create download link
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    
    // Clean up
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading PDF:', error);
    throw new Error('Failed to download PDF');
  }
};
