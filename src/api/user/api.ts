export async function getUserStats({ queryKey }: { queryKey: string[] }) {
    const [_1, _2, seasonId, userNum] = queryKey;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_ER_API_LOCATION}/v1/user/stats/${userNum}/${seasonId}`,
        {
            next: {
                tags: ["user", "stats", seasonId, userNum],
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

export async function getUserNum({ queryKey }: { queryKey: string[] }) {
    const [_1, _2, nickName] = queryKey;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_ER_API_LOCATION}/v1/user/nickname?query=${nickName}`,
        {
            next: {
                tags: ["user", "nickname", nickName],
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
