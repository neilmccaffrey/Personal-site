import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  // Here you can handle the form data, e.g., send an email or save it to a database.
  console.log('Form Data:', { name, email, subject, message });

  return NextResponse.json(
    { message: 'Message sent successfully' },
    { status: 200 },
  );
}
