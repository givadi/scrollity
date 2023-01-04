function generateId() {
    return Date.now() as unknown as string;
}

export {
    generateId
}