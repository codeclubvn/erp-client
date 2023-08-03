export const wait = (duration: number = 500) =>
    new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
