
import { Document, Page, Text, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles for PDF content
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
});

// Create a PDF Document component
export const WhitepaperDocument = ({ title, content }: { title: string; content: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </Page>
  </Document>
);

// Function to convert markdown to plaintext (simplified version)
export const markdownToPlaintext = (markdown: string): string => {
  // Remove headers (#)
  let plaintext = markdown.replace(/#{1,6}\s+/g, '');
  
  // Remove bullet points
  plaintext = plaintext.replace(/[*-]\s+/g, '• ');
  
  // Remove other markdown formatting like ** for bold, * for italic, etc.
  plaintext = plaintext.replace(/\*\*(.*?)\*\*/g, '$1');
  plaintext = plaintext.replace(/\*(.*?)\*/g, '$1');
  
  return plaintext;
};

// Export the PDF download link component
export const PDFDownloadButton = ({ 
  filename, 
  title, 
  content 
}: { 
  filename: string; 
  title: string; 
  content: string;
}) => (
  <PDFDownloadLink 
    document={<WhitepaperDocument title={title} content={markdownToPlaintext(content)} />} 
    fileName={filename}
  >
    {({ loading }) => (loading ? 'Preparing document...' : 'Download PDF')}
  </PDFDownloadLink>
);
