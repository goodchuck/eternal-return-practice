export async function getMetaType({ queryKey }: { queryKey: string[] }) {
    const [_1, metaType] = queryKey;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_ER_API_LOCATION}/v2/data/${metaType}`,
        {
            next: {
                tags: ["main", metaType],
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
