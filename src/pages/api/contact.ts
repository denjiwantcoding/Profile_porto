// API Endpoint: POST /api/contact
// Handles contact form submissions

export const prerender = false;

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST({ request }: { request: Request }) {
  try {
    const rawBody = await request.text();
    if (!rawBody.trim()) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Tidak ada data yang dikirim'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let body: ContactFormData;
    try {
      const json = JSON.parse(rawBody);
      body = {
        name: String(json?.name || ''),
        email: String(json?.email || ''),
        subject: String(json?.subject || ''),
        message: String(json?.message || '')
      };
    } catch {
      const formLike = new URLSearchParams(rawBody);
      body = {
        name: String(formLike.get('name') || ''),
        email: String(formLike.get('email') || ''),
        subject: String(formLike.get('subject') || ''),
        message: String(formLike.get('message') || '')
      };
    }

    const normalizedBody: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim(),
      subject: (body.subject || '').trim(),
      message: body.message.trim()
    };

    if (!normalizedBody.name || !normalizedBody.email || !normalizedBody.message) {
      const missing = [];
      if (!normalizedBody.name) missing.push('nama');
      if (!normalizedBody.email) missing.push('email');
      if (!normalizedBody.message) missing.push('pesan');

      return new Response(JSON.stringify({
        success: false,
        error: `${missing.join(', ')} wajib diisi`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedBody.email)) {
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
      name: normalizedBody.name,
      email: normalizedBody.email,
      subject: normalizedBody.subject || 'No subject',
      message: normalizedBody.message,
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
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[API] CATCH ERROR:', errorMessage);
    
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
