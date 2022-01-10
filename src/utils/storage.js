export const storeAsJson = ((key, object) => {
    let json = JSON.stringify(object);
    localStorage.setItem(key, json);
});

export const getFromStore = ((key) =>  {
    let value = localStorage.getItem(key);
    if(value) {
        return JSON.parse(value);
    }
    return null;
})