const splitArr = (arr: any[], size: number) => {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    };

    return result;
};

export default splitArr;