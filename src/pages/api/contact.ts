// API Endpoint: POST /api/contact
// Handles contact form submissions

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST({ request }: { request: Request }) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Nama, email, dan pesan wajib diisi'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Format email tidak valid'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Log the submission (replace with actual email service or database)
    console.log('Contact Form Submission:', {
      name: body.name,
      email: body.email,
      subject: body.subject || 'No subject',
      message: body.message,
      timestamp: new Date().toISOString()
    });

    // TODO: Implement actual email sending or database storage
    // Examples:
    // - Send email using Resend, SendGrid, or Nodemailer
    // - Save to database (MongoDB, PostgreSQL, etc.)
    // - Send to Slack webhook
    // - Save to Google Sheets
    
    // Simulate processing delay
    await new Promise<void>(resolve => setTimeout(resolve, 500));

    return new Response(JSON.stringify({
      success: true,
      message: 'Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Terjadi kesalahan. Silakan coba lagi nanti.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Handle GET request (not allowed)
export async function GET() {
  return new Response(JSON.stringify({
    success: false,
    error: 'Method not allowed'
  }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
