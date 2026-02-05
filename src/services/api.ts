export async function fetchAPI(endpoint: string, options?: RequestInit) {
  const baseURL = import.meta.env.PUBLIC_API_URL || '';
  
  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export async function getProjects() {
  return fetchAPI('/api/projects');
}

export async function getProjectBySlug(slug: string) {
  return fetchAPI(`/api/projects/${slug}`);
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}) {
  return fetchAPI('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
