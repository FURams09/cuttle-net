export const fakeFetcher = () => new Promise<string>((resolve) => {
    setTimeout(() => resolve('new data'), 500)
}) 