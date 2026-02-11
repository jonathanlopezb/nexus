const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchStrapi(endpoint: string, options: RequestInit = {}) {
    const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            ...options.headers,
        },
    });

    if (!res.ok) {
        console.error(`Strapi Error: ${res.statusText}`);
        return null;
    }

    return await res.json();
}

export async function getProducts() {
    const data = await fetchStrapi('productos?populate=*');
    return data?.data || [];
}

export async function getBrands() {
    const data = await fetchStrapi('marcas?populate=*');
    return data?.data || [];
}
