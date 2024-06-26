export async function HttpClient(fetchUrl, fetchOptions) {
    const options = {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    };

    return fetch(fetchUrl, options)
        .then(async (respostaServidor) => {
            return {
                ok: respostaServidor.ok,
                status: respostaServidor.status,
                statusText: respostaServidor.statusText,
                body: await respostaServidor.json(),
            }
        });
}