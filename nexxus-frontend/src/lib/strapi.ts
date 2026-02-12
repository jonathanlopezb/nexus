const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export async function fetchStrapi(endpoint: string, options: RequestInit = {}) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    // Get token from parameter, env or localStorage
    const clientToken = typeof window !== 'undefined' ? localStorage.getItem('nexxus_token') : null;
    const token = STRAPI_TOKEN || clientToken;

    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    if (options.headers) {
        const customHeaders = new Headers(options.headers);
        customHeaders.forEach((value, key) => {
            headers.set(key, value);
        });
    }

    const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
        ...options,
        headers,
    });

    if (!res.ok) {
        console.error(`Strapi Error [${endpoint}]: ${res.statusText} (${res.status})`);
        return null;
    }

    const json = await res.json();
    console.log(`Strapi Data [${endpoint}]:`, json);
    return json;
}

export async function getProducts() {
    // Usamos populate=* para traer primer nivel, pero especificamos relaciones clave
    const data = await fetchStrapi('productos?populate[marca][populate]=*&populate[estilo][populate]=*&populate[ImagenAura][populate]=*');
    return data?.data || [];
}

export async function getBrands() {
    const data = await fetchStrapi('marcas?populate=*');
    return data?.data || [];
}

export async function getHero() {
    const data = await fetchStrapi('hero?populate=*');
    return data?.data || null;
}
export async function getProduct(documentId: string) {
    const data = await fetchStrapi(`productos/${documentId}?populate[marca][populate]=*&populate[estilo][populate]=*&populate[ImagenAura][populate]=*`);
    return data?.data || null;
}
