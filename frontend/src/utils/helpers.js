export function formatedDate(utc) {
    const d = new Date(utc);
    const day = d.getDay().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear().toString().padStart(2, '0');
    
    return `${day}/${month}/${year}`;
}

export function errorMessage(error) {
    const message = (error.response && error.response.data && error.response.data.message) 
        || error.mesage || error.toString();
    return message;
}