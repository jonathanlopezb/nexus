const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export async function fetchStrapi(endpoint: string, options: RequestInit = {}) {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const headers = new Headers(defaultHeaders);

    if (options.headers) {
        const customHeaders = new Headers(options.headers);
        customHeaders.forEach((value, key) => {
            headers.set(key, value);
        });
    }

    if (STRAPI_TOKEN) {
        headers.set('Authorization', `Bearer ${STRAPI_TOKEN}`);
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
