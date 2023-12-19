export async function getLastRoutes({ queryKey }: { queryKey: string[] }) {
    const res = await fetch(
        // `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`,
        `${process.env.NEXT_PUBLIC_ER_API_LOCATION}/v1/weaponRoutes/recommend`,
        {
            next: {
                tags: ["routes"],
            },
            // credentials: 'include',
            cache: "no-store",
            headers: {
                // "x-api-key": "nh5ijgU2vt3FfZ9ZyoTPs7tahKcT6ISh2TEBHV3N",
                "x-api-key": `${process.env.NEXT_PUBLIC_ER_API_KEY}`,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
